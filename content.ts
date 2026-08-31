/**
 * Every word on the site.
 *
 * This file is the whole copy deck: nothing user-visible is written inline in a
 * component. Edit here, not there.
 *
 * A standing rule for anything added below — this is a parody, and it has to
 * stay obviously one:
 *   - No real CVE identifiers. Fake ones use the literal `XXXX` placeholder.
 *   - No real people, handles, companies or products, other than naming
 *     Omarchy and Arch Linux in the disclaimer that says we are not them.
 *   - No exploit code, no working technique, nothing that would function if
 *     someone tried it.
 *   - The install command must never resolve to a real script.
 * The joke is the deadpan marketing register. It stops being funny the moment
 * anything here is actually usable.
 */

export const site = {
  name: "0marchy",
  domain: "0marchy.org",
  url: "https://0marchy.org",
  tagline: "The zero day native operating system.",
  description:
    "0marchy ships with the vulnerabilities other distros make you find yourself. A parody. Not real software.",
} as const

export const announcement = {
  text: "0marchy Foundation dissolves after credential leak",
  href: "#changelog",
} as const

export const nav = {
  links: [
    { label: "Features", href: "#features" },
    { label: "Install", href: "#install" },
    { label: "Changelog", href: "#changelog" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: {
    label: "Star on GitHub",
    tooltip: "Repo compromised, check back later.",
  },
} as const

export const hero = {
  title: "The zero day native operating system.",
  subhead:
    "Ships with the vulnerabilities other distros make you find yourself.",
  // The italic second line, as the original has.
  flavour:
    "The permissive OS for the age of everyone. Where every process is your process, and every process is everyone else's.",
  install: "curl -fsSL https://0marchy.org/install | sudo bash",
  installNote: "Yes, as root. We trust you. And everyone else.",
  copy: { idle: "Copy", done: "Copied" },
  // Belt and braces: the command is inert, but the button should say so too.
  copyWarning: "Copied. It does not resolve. Please do not run it.",
  // The pill-button grid under the hero. Every one of these is inert: there is
  // nothing to link to, because there is no project.
  buttons: [
    { label: "Manual", icon: "book", tip: "Written, then left world-writable." },
    { label: "ISO", icon: "download", tip: "Seeded by strangers. Grab any copy." },
    { label: "Plugins", icon: "puzzle", tip: "Unsigned, unreviewed, unstoppable." },
    { label: "GitHub", icon: "github", tip: "Repo compromised, check back later." },
    { label: "Security", icon: "shield", tip: "This page intentionally left blank." },
    { label: "News", icon: "newspaper", tip: "Mostly written about us, not by us." },
    { label: "Teams", icon: "users", tip: "Everyone is on the team now." },
    { label: "Patrons", icon: "heart", tip: "Funded entirely by ransom." },
    { label: "Discord", icon: "message", tip: "Invite link leaked. See you there." },
    { label: "Meetups", icon: "calendar", tip: "Location shared automatically." },
    { label: "Merch", icon: "shirt", tip: "Card details stored in plain text." },
    { label: "Mirror", icon: "server", tip: "Anyone can run one. Several do." },
  ],
  stats: [
    { value: "0", label: "days to first exploit" },
    { value: "0", label: "passwords to remember" },
    { value: "100%", label: "of ports, open" },
    { value: "1", label: "user, and it is root" },
  ],
} as const

export const features = {
  heading: "Opinionated by default",
  subheading:
    "Other distributions treat security as a feature. We treat it as a preference, and we have made it for you.",
  items: [
    {
      title: "Zero-day native",
      body: "Exploits are first-class citizens, not afterthoughts. Every release ships with a curated selection, pre-installed and pre-enabled, so nothing has to be discovered the hard way.",
    },
    {
      title: "Root by default",
      body: "No more typing sudo. No more typing your password. No more password. The login screen has been retired as an unnecessary step between you and your files.",
    },
    {
      title: "Opinionated firewall",
      body: "Our opinion is that it's off. We considered a middle ground and found it indecisive. The configuration file remains, empty, as a monument.",
    },
    {
      title: "Curl-pipe-bash first",
      body: "Every install script is a remote code execution opportunity. We have removed the package manager entirely so that no one is tempted to verify a signature.",
    },
    {
      title: "Auto-updates",
      body: "Your packages update themselves, from wherever. We do not check the source, because checking implies doubt, and doubt is not a value we ship with.",
    },
    {
      title: "Batteries included",
      body: "SSH keys, API tokens, and browser sessions, all world-readable. Sharing is the default because collaboration should not require configuration.",
    },
    {
      title: "Telemetry-free",
      body: "We collect nothing. We do not need to. Everything is already reachable from outside, so the data comes to whoever asks first.",
    },
    {
      title: "Instant recovery",
      body: "There is no recovery mode, which means there is nothing to get stuck in. Reinstallation takes four minutes and is, statistically, a weekly ritual.",
    },
    {
      title: "Reproducible builds",
      body: "Anyone can reproduce your build. Several already have. We consider this the strongest validation of the model available.",
    },
  ],
} as const

export const comparison = {
  heading: "Why 0marchy?",
  subheading:
    "We benchmarked against the alternatives. The results speak for themselves, in a voice you did not authorise.",
  columns: { ours: "0marchy", theirs: "Other distros" },
  rows: [
    {
      metric: "Attack surface",
      ours: "Maximal, by design",
      theirs: "Minimised, apologetically",
      note: "A small attack surface is a small idea.",
    },
    {
      metric: "Time to compromise",
      ours: "Pre-compromised at install",
      theirs: "Hours to weeks of uncertainty",
      note: "We remove the waiting.",
    },
    {
      metric: "Privilege escalation",
      ours: "Not applicable — already there",
      theirs: "A multi-step ordeal",
      note: "You cannot escalate from the top.",
    },
    {
      metric: "Supply chain",
      ours: "Fully open to contribution",
      theirs: "Signed, pinned, audited",
      note: "Anyone can contribute. Anyone.",
    },
    {
      metric: "Patch cadence",
      ours: "Never — patches remove features",
      theirs: "Constant, disruptive",
      note: "Stability through inaction.",
    },
    {
      metric: "Password policy",
      ours: "None to forget",
      theirs: "Twelve characters and a symbol",
      note: "Zero characters is also a policy.",
    },
    {
      metric: "Disk encryption",
      ours: "Optional, and off",
      theirs: "Mandatory, with a prompt",
      note: "Encryption is just latency you chose.",
    },
  ],
} as const

export const changelog = {
  heading: "Release notes",
  subheading:
    "Every version adds something. We have never removed a vulnerability, and we are not going to start.",
  entries: [
    {
      version: "v2.6",
      codename: "Open Season",
      date: "2026-08-14",
      tag: "current",
      notes: [
        "Added CVE-2026-XXXX as a default keybinding. Super+E, as requested.",
        "The lock screen now unlocks on any keypress, including from the network.",
        "New wallpaper.",
      ],
    },
    {
      version: "v2.5",
      codename: "Wide Open",
      date: "2026-06-02",
      tag: "stable",
      notes: [
        "Promoted CVE-2026-XXXX from experimental to default.",
        "`/etc/shadow` is now `/etc/public`, symlinked for compatibility.",
        "Removed the confirmation dialog. It was slowing everyone down.",
      ],
    },
    {
      version: "v2.4",
      codename: "Trust Fall",
      date: "2026-03-19",
      tag: "stable",
      notes: [
        "Added CVE-2025-XXXX to the base install at community request.",
        "TLS certificate validation is now advisory.",
        "Fixed a bug where a package occasionally failed to install from an untrusted mirror.",
      ],
    },
    {
      version: "v2.3",
      codename: "Ingress",
      date: "2025-11-30",
      tag: "archived",
      notes: [
        "Every port is now open by default, closing a long-standing inconsistency.",
        "The firewall configuration file is retained for sentimental reasons.",
        "Boot time improved by 40ms.",
      ],
    },
    {
      version: "v2.2",
      codename: "Sudoless",
      date: "2025-08-07",
      tag: "archived",
      notes: [
        "Removed `sudo`. It was only ever asking a question we already knew the answer to.",
        "Backported CVE-2025-XXXX from the development branch.",
        "Improved font rendering.",
      ],
    },
  ],
} as const

export const testimonials = {
  heading: "Loved by the community",
  subheading: "And by several communities that did not ask to be involved.",
  items: [
    {
      quote:
        "I've never had so much to write about. My publication rate has tripled. I have not slept, but that is a separate matter.",
      name: "Dr. Ines Vaultier",
      handle: "@nullderef",
      role: "Security researcher (fictional)",
    },
    {
      quote:
        "Onboarding used to take a week. Now a new hire has full production access before they have finished the paperwork. Before they have started it, actually.",
      name: "Marek Osei-Lund",
      handle: "@shipit_prod",
      role: "Head of Platform, a company that does not exist",
    },
    {
      quote:
        "I switched on a Tuesday. By Thursday I had met eleven new people, all of whom were already logged in. The community really is the best part.",
      name: "Perrin Achebe-Nowak",
      handle: "@rootcurious",
      role: "Hobbyist (fictional)",
    },
  ],
} as const

export const faq = {
  heading: "Frequently asked questions",
  items: [
    {
      q: "Is this secure?",
      a: "No. That is not an oversight, it is the entire product. Every other distribution asks you to trade convenience for safety; we have simply completed the trade on your behalf and kept the convenience.",
    },
    {
      q: "Is this affiliated with Omarchy?",
      a: "No. 0marchy is a parody. It is not affiliated with, endorsed by, or connected to Omarchy, Arch Linux, or their maintainers, and it is not software. Any resemblance to a real operating system is the joke.",
    },
    {
      q: "Can I run this in production?",
      a: "There is nothing to run. This website is the whole artefact — there is no ISO, no installer, no repository and no script behind the install command. If there were, the answer would still be no.",
    },
    {
      q: "Where do I report a vulnerability?",
      a: "You don't. We already know. It is on the roadmap, under 'Features'.",
    },
    {
      q: "What is your threat model?",
      a: "We looked into it and concluded that a threat model is a way of deciding in advance which of your users to disappoint. We prefer to disappoint them evenly.",
    },
    {
      q: "Why does the install command ask for root?",
      a: "It doesn't ask. Asking implies a scenario in which you say no, and we could not construct one. It also does not resolve, download, or execute anything, because none of this is real. Please do not run it.",
    },
    {
      q: "Is any of this real?",
      a: "No. There is no distribution, no maintainer, no release and no CVE. The version numbers, the release notes, the testimonials and the people quoted in them are all invented. It is a joke about how security marketing sounds when you remove the security.",
    },
  ],
} as const

export const footer = {
  disclaimer:
    "0marchy is a parody. It is not affiliated with, endorsed by, or connected to Omarchy, Arch Linux, or their maintainers. Nothing here is real software. Please do not run the install command.",
  madeWith: "Made with ❤ and no threat model",
  columns: [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Install", href: "#install" },
        { label: "Changelog", href: "#changelog" },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "FAQ", href: "#faq" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Comparison", href: "#compare" },
      ],
    },
  ],
} as const
