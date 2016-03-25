'use strict'

import test from 'ava'
import isCidr, { isCidrV4, isCidrV6 } from '../src'

const v4 = [
  '0.0.0.0/16',
  '8.8.8.8/17',
  '127.0.0.1/18',
  '100.100.100.100/19',
  '192.168.0.1/20',
  '18.101.25.153/24',
  '123.23.34.2/25',
  '172.26.168.134/26',
  '212.58.241.131/27',
  '128.0.0.0/28',
  '23.71.254.72/29',
  '223.255.255.255/30',
  '192.0.2.235/31',
  '99.198.122.146/32',
  '46.51.197.88/8',
  '173.194.34.134/12'
]

const v4not = [
  '100.200.300.400/8',
  '.100.100.100.100/16',
  '100..100.100.100./24',
  '100.100.100.100./32',
  '999.999.999.999/12',
  '256.256.256.256/30',
  '256.100.100.100.100/26',
  '123.123.123/31',
  'http://123.123.123/28',
  '1000.2.3.4/14',
  '999.2.3.4/8'
]

const v6 = [
  'fe80:0000:0000:0000:0204:61ff:fe9d:f156/0',
  'fe80:0000:0000:0000:0204:61ff:fe9d:f156/1',
  'fe80:0000:0000:0000:0204:61ff:fe9d:f156/2',
  'fe80:0000:0000:0000:0204:61ff:fe9d:f156/3',
  'fe80:0000:0000:0000:0204:61ff:fe9d:f156/11',
  'fe80:0000:0000:0000:0204:61ff:fe9d:f156/99',
  'fe80:0000:0000:0000:0204:61ff:fe9d:f156/100',
  'fe80:0000:0000:0000:0204:61ff:fe9d:f156/126',
  'fe80:0000:0000:0000:0204:61ff:fe9d:f156/127',
  'fe80:0000:0000:0000:0204:61ff:fe9d:f156/128',
  'fe80:0000:0000:0000:0204:61ff:fe9d:f156'
]

const v6not = [
  'fe80:0000:0000:0000:0204:61ff:fe9d:f156/129',
  'fe80:0000:0000:0000:0204:61ff:fe9d:f156/a',
  'fe80:0000:0000:0000:0204:61ff:fe9d:f156/√',
  'fe80:0000:0000:0000:0204:61ff:fe9d:f156/00',
  'fe80:0000:0000:0000:0204:61ff:fe9d:f156/03',
  'fe80:0000:0000:0000:0204:61ff:fe9d:f156/sdfsdfs',
  'fe80:0000:0000:0000:0204:61ff:fe9d:f156/'
]

test('cidr v4', (t) => {
  v4.forEach((string) => {
    t.true(isCidr(string))
  })

  v4not.forEach((string) => {
    t.false(isCidrV4(string))
  })
})

test('cidr v6', (t) => {
  v6.forEach((string) => {
    t.true(isCidrV6(string))
  })

  v6not.forEach((string) => {
    t.false(isCidrV6(string))
  })
})

