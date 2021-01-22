// doi regex here - https://www.crossref.org/blog/dois-and-matching-regular-expressions/
// note - had to add an escape character for the second and third forward slash in the regex above
export const DOI_REGEX = /^10.\d{4,9}\/[-._;()\/:a-z0-9]+$/i
// check for 'syn' followed and ended by a digit of unlimited length, must also begin the line
export const SYNAPSE_REGX = /^syn\d+\.?\d+$/
