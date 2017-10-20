#!/usr/bin/env node

/**
 * This module concatenates all markdown-files from the sections-directory and adds chapter numbers and resolves
 * cross-references
 */
const fs = require('fs')
const path = require('path')

const pify = require('pify')
const readFile = pify(fs.readFile)
const readDir = pify(fs.readdir)
const writeFile = pify(fs.writeFile)
const markedpp = pify(require('markedpp'))

const sectionsDir = path.resolve(__dirname, '..', 'sections')
const targetFile = path.resolve(__dirname, '..', 'SPECIFICATION.md')


const sectionFiles = fs.readdirSync(sectionsDir)
sectionFiles.sort()

readDir(sectionsDir)
  .then((sectionFiles) => {
    // Sort by name
    sectionFiles.sort()
    // Read all section files
    let contentPromises  = sectionFiles.map((file) => readFile(path.join(sectionsDir, file), 'utf-8'))
    return Promise.all(contentPromises)
  })
  .then((sections) => sections.join('\n')) // concat
  .then((contents) => markedpp(contents))
  .then((contents) => writeFile(targetFile, contents))
  .then(console.log, console.error)

