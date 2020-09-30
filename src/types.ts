import * as t from "io-ts";

/**
 * Type guards
 */

const isNonEmptyString = (input: unknown): input is string => {
  return typeof input === "string" && input.length > 0;
};

const isIdString = (input: unknown): input is string => {
  return isNonEmptyString(input) && /[A-Za-z]{12}/g.test(input);
};

/**
 * Custom codecs
 */

const nonEmptyString = new t.Type<string, string, unknown>(
  "nonEmptyString",
  isNonEmptyString,
  (input, context) => (isNonEmptyString(input) ? t.success(input) : t.failure(input, context)),
  t.identity,
);

const utcDateString = new t.Type<string, string, unknown>(
  "utcDateString",
  (input: unknown): input is string => typeof input === "string" && input.length > 0,
  (input, context) => (typeof input === "string" ? t.success(input) : t.failure(input, context)),
  t.identity,
);

const idString = new t.Type<string, string, unknown>(
  "idString",
  isIdString,
  (input, context) => (isIdString(input) ? t.success(input) : t.failure(input, context)),
  t.identity,
);

/**
 * Composite types
 */

export const User = t.type({
  id: idString,
  handle: nonEmptyString,
  imgUrl: t.string,
});

export const Comment = t.type({
  id: idString,
  body: nonEmptyString,
  createdAt: utcDateString,
  user: User,
});

export const Comments = t.array(Comment);

export const Post = t.type({
  id: idString,
  title: nonEmptyString,
  body: nonEmptyString,
  createdAt: utcDateString,
  user: User,
  comments: Comments,
});

export const Posts = t.array(Post);

/**
 * Static types
 */

export type Comment = t.TypeOf<typeof Comment>;
export type Comments = t.TypeOf<typeof Comments>;
export type Post = t.TypeOf<typeof Post>;
export type Posts = t.TypeOf<typeof Posts>;
export type User = t.TypeOf<typeof User>;
