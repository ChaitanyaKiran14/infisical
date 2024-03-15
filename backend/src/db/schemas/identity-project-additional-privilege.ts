// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const IdentityProjectAdditionalPrivilegeSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullable().optional(),
  projectMembershipId: z.string().uuid(),
  isTemporary: z.boolean().default(false),
  temporaryMode: z.string().nullable().optional(),
  temporaryRange: z.string().nullable().optional(),
  temporaryAccessStartTime: z.date().nullable().optional(),
  temporaryAccessEndTime: z.date().nullable().optional(),
  permissions: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type TIdentityProjectAdditionalPrivilege = z.infer<typeof IdentityProjectAdditionalPrivilegeSchema>;
export type TIdentityProjectAdditionalPrivilegeInsert = Omit<
  z.input<typeof IdentityProjectAdditionalPrivilegeSchema>,
  TImmutableDBKeys
>;
export type TIdentityProjectAdditionalPrivilegeUpdate = Partial<
  Omit<z.input<typeof IdentityProjectAdditionalPrivilegeSchema>, TImmutableDBKeys>
>;
