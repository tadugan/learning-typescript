// Generic Scopes and Constraints
// Generic Constraints let us set the "minimum requirements" for a parameter
// Describing a constraint
// - function listToDict(list: HasId[]): Dict<HasId> { // don't do this
// + function listToDict<T extends HasId>(list: T[]): Dict<T> { // do this
// Note that our “requirement” for our argument type (HasId[]) is now represented in two places:
// extends HasId as the constraint on T
// list: T[] to ensure that we still receive an array
// The point of type parameters and generic types is to relate multiple things
