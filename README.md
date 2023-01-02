# UDACITY Image Processing API Project

## Description
This is an image processing API that can be used in two different ways. As a simple placeholder API, the first allows you to place images into a frontend with the size set via URL parameters (and additional stylization if you choose) for rapid prototyping. The second use case is as a library to serve properly scaled versions of an images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image to be used throughout your site.

## scripts
test: `npm run test` <br>
build: `npm run build` <br>
start development: `npm run dev`<br>
start production: `npm start` <br>
lint: `npm run lint` <br>
prettier: `npm run prettier`

## example
http://localhost:3121/images?filename=mouse&height=300&width=400&type=jpeg
### Query Params
>> filename: this is the name of the image <string> <br>
>> height: this is the height of the image <number> <br>
>> width: this is the width of the image <number> <br>
>> type <optional>: this is the type of resized image (e.g 'jpg', 'png', 'jpeg')