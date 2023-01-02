# UDACITY Image Processing API Project

## Description
This is an image processing API that can be used in two different ways. As a simple placeholder API, the first allows you to place images into a frontend with the size set via URL parameters (and additional stylization if you choose) for rapid prototyping. The second use case is as a library to serve properly scaled versions of an images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image to be used throughout your site.

## script
test: `npm run test`
build: `npm run build`
start development: `npm run dev`
start production: `npm start`
lint: `npm run lint`
prettier: `npm run prettier`

## example
http://localhost:3121/images?filename=mouse&height=300&width=400&type=jpeg
### Query Params
>> filename: this is the name of the image <string>
>> height: this is the height of the image <number>
>> width: this is the width of the image <number>
>> type <optional>: this is the type of resized image (e.g 'jpg', 'png', 'jpeg')