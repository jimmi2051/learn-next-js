/* global jest, describe, test, expect */
import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import NextLink from 'next/link'
import nextRoutes from '../routes/route'

IndexPage.getInitalProps = async ({
  pathname,
  query, 
  asPath,
  req,
  res,
  err
})=>{
  console.log(pathname)
}