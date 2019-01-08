# react-bpmf
[![NPM version](https://img.shields.io/npm/v/react-bpmf.svg?style=flat)](https://www.npmjs.com/package/react-bpmf)
![npm](https://img.shields.io/npm/dt/react-bpmf.svg)

*React library for displaying Zhuyin Fuhao alongside Chinese characters*

## Introduction
This package aims to render Zhuyin Fuhao, a ruby text system colloquially referred to as 'bopomofo') alongside Chinese characters as specified by the Taiwan Ministry of Education ([see more here](https://r12a.github.io/scripts/bopomofo/ontheweb)) by means of the React framework and parametric CSS, which can be accomplished thanks to [`styled-components`](https://github.com/styled-components/styled-components).

## Installation
`npm i react-bpmf`

## Components
### `BpmfText`
`props`:
-   `vertical`: Boolean. Controls the orientation of the ruby text. If true, renders ruby text vertically, renders horizontally otherwise.
-   `fontSize`: String. An acceptable CSS font size value that controls the font size of the rendered text.
-   `string`: String. The text whose pronunciation is to be notated by the ruby text. Can be more than one alphanumeric or CJK character.
-   `pronunciation`: String. The content of the ruby text excluding the tone marker.
-   `tone`: String. Tone marker, if applicable.

### `BpmfTextBlock`
`props`:
-   `container_vertical`: Boolean. Controls the orientation of the container.
-   `text_vertical`: Boolean. Controls the orientation of the ruby text.
-   `fontSize`: String. An acceptable CSS font size value that controls the font size of the rendered text.
-   `text`: String. The text whose pronunciation is to be notated by the ruby text.
-   `pronunciation`: String. Contains the pronunciation of the entire string.

## Experimental Features
### Automated Pronunciation Labeling using `BpmfAutoText` and `BpmfAutoTextUnit`
`props`: Same as those of `BpmfTextBlock` and `BpmfText`, respectively, excluding `pronunciation` and `tone`, as the pronunciation string is automatically generated.

## Changelog
-  v0.1.0: Added `BpmfAutoTextUnit`
-  v0.0.1: The Taiwan Ministry of Education specification has been implemented only for the vertical display of characters.  

## Pull Requests and Constructive Criticism Welcome
