import Post from '@models/post'
import './styles/styles'
import json from './assets/json'
import WebpackLogo from './assets/webpack-logo.png'
import xml from './assets/data.xml'
import csv from './assets/data.csv'
import * as $ from 'jquery'

const post = new Post('Webpack Post title', WebpackLogo)

$('pre').addClass('code').html(post.toString())

console.log('Post to string ->', post)

console.log('Json ->', json)

console.log('xml ->', xml)

console.log('csv ->', csv)
