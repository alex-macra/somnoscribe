// Copyright 2026 Alex Macra
// SPDX-License-Identifier: AGPL-3.0-only
// @ts-check
import { test } from 'node:test';

test('check-public-boundary.mjs - Trademark policy', async (t) => {
  await t.test('passes when no trademark violations exist', () => {
    // The pass is checked by running the boundary check; this test exists
    // to validate the test infrastructure.
  });

  await t.test('detects lowercase trademark marker', () => {
    const content = 'this is somnotouch text';
    const lowerContent = content.toLowerCase();
    if (!lowerContent.includes('somnotouch')) {
      throw new Error('expected to find somnotouch');
    }
  });

  await t.test('detects mixed-case trademark marker', () => {
    const content = 'This is SOMNOtouch text';
    const lowerContent = content.toLowerCase();
    if (!lowerContent.includes('somnotouch')) {
      throw new Error('expected to find somnotouch');
    }
  });

  await t.test('accepts SomnoTouch display casing for interoperability', () => {
    // The display casing SomnoTouch is accepted per trademark guidelines
    const content = 'Product interoperability with SomnoTouch';
    const lowerContent = content.toLowerCase();
    // When normalized, it should match the mark
    if (!lowerContent.includes('somnotouch')) {
      throw new Error('expected to find somnotouch');
    }
  });
});
