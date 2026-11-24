# Security Policy

## Scope
MYTHOS X is an early-stage learning and developer-tool starter. The terminal is simulated, the network panel is a checklist, and the investigation mission uses fictional data. These modules do not authorize testing third-party systems.

## Reporting a vulnerability
Do not publish credentials, personal data, or exploit details in a public issue. Contact the repository maintainer privately through the GitHub profile and include a short description, impact, safe reproduction steps in a local or authorized environment, and suggested mitigation.

## Secret handling
- Never commit API keys, passwords, cookies, private keys, or production data.
- Use server-side environment variables and a secret manager.
- Rotate any credential that is accidentally exposed.
- Test only systems you own or have explicit permission to assess.