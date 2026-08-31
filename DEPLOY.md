# Deployment

The site is a static export. `bun run build` writes `out/`, which is plain HTML,
CSS and JS — it can be served by anything.

## Current state

| | |
|---|---|
| Repository | https://github.com/OA/0marchy (public) |
| Vercel project | `fiona/0marchy`, connected to the repo |
| Live now | https://0marchy.vercel.app |
| Target domain | `0marchy.org` and `www.0marchy.org`, both added to the project |

The repository is connected to the Vercel project, so a push to `main` deploys
automatically. `vercel deploy --prod` from this directory also works.

## DNS — what still needs doing

`0marchy.org` is registered at Namecheap and its nameservers are still
`dns1.registrar-servers.com` / `dns2.registrar-servers.com`, so the domain does
not yet point at Vercel. `www` currently resolves to Namecheap's parking page.

Pick **one** of the two options below.

### Option A — keep Namecheap's DNS, add records (recommended)

Least disruptive: nothing else using this domain changes. In Namecheap →
Domain List → **Manage** → **Advanced DNS**, remove the existing parking
records for `@` and `www`, then add:

| Type | Host | Value | TTL |
|---|---|---|---|
| `A` | `@` | `76.76.21.21` | Automatic |
| `CNAME` | `www` | `cname.vercel-dns.com.` | Automatic |

Two notes:

- Remove Namecheap's default **URL Redirect Record** on `@` and the
  **CNAME → parkingpage.namecheap.com** on `www` first. If they are left in
  place they win, and verification never completes.
- `vercel domains inspect` reports `A www 76.76.21.21` rather than the CNAME.
  Either works. The CNAME is preferable because it follows Vercel's edge if
  that IP ever changes; the A record would then need updating by hand.

### Option B — delegate the whole domain to Vercel

Change the nameservers at Namecheap (Domain List → Manage → **Nameservers** →
Custom DNS) to:

```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

Vercel then manages every record for the domain. Do **not** choose this if
`0marchy.org` carries email (MX) or other records, because they would have to
be recreated inside Vercel.

## After the records are in

Propagation is usually minutes, occasionally up to an hour. Then:

```sh
vercel domains inspect 0marchy.org      # should show the A record as ✔
dig +short 0marchy.org                  # expect 76.76.21.21
dig +short www.0marchy.org              # expect a cname.vercel-dns.com target
```

Vercel issues the TLS certificate automatically once the records resolve, and
emails when verification completes. Until then the site stays reachable at
https://0marchy.vercel.app.
