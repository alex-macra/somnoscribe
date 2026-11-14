# Changelog

This project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html). Before `1.0.0`, interfaces may change in any release.

## [Unreleased]

### Added

- The public-boundary check rejects the third-party trademark outside an explicit allowlist of interoperability files, with tests (`npm run test:boundary`).

### Changed

- Updated `pypdf` in the preprocessor from 6.14.2 to 6.15.0 (#16).
- Contributing guide documents the product-naming rule for the third-party mark.

### Fixed

- An end-to-end test now uses the Somnoscribe name instead of the third-party mark.

## [0.2.0-alpha.1] - 2026-08-05

First public alpha of the self-hosted, evidence-linked review workspace.

### Added

- Signature-validated EDF, PDF, and image ingestion with EDF-header replacement, screenshot cropping, and private temporary storage.
- FastAPI preprocessing for signal quality, candidate windows, and compact evidence packages.
- SSE analysis, typed report drafts, citation checks, review decisions, and reviewer sign-off records.
- A loopback single-operator mode with an optional shared bearer guard.
- Deterministic demo-model and demo-study paths that do not call a live model or use patient data.
- Optional, externally stored reference packs with strict schema validation and visible unavailable-state warnings.
- Docker Compose, synthetic tests, and a public-boundary check.

### Alpha limits

- Database schemas have no upgrade path. Delete `api/data/cases.sqlite` when moving between alpha versions.
- The tool is clinician-assist research software, not an autonomous diagnostic or production system. Read [Safety](SAFETY.md).
- The open-source license is [AGPL-3.0-only](LICENSE); [commercial terms](LICENSE-COMMERCIAL.md) are separate.

[Unreleased]: https://github.com/alex-macra/somnoscribe/compare/v0.2.0-alpha.1...HEAD
[0.2.0-alpha.1]: https://github.com/alex-macra/somnoscribe/releases/tag/v0.2.0-alpha.1
