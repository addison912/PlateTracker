# Plate Tracker

![plteTrck-carousel.png](http://www.addisonmoore.me/images/plteTrck-carousel.png)

Plate Tracker is a React-Native mobile application built around the OpenALPR library (Automatic License Plate Recognition). It allows users to scan vehicle license plates and check them against our database of over 12000 stolen vehicles. Users can register their stolen vehicles in the app and receive a notification if their license plate is scanned.

## Motivation

I was inspired to build this app when my own motorcyle was stolen. I searched the internet for online communities that could support me in recovering my vehicle. I found many Facebook pages and bulletin boards fractured across the internet where people were posting their stolen vehicles and reporting suspicious vehicles but nowhere that all the information was shared. There are over 750,000 vehicles stolen in the US every year. Until now there was no central resource for people to share stolen vehicle information.

## Usage

Plate Tracker allows users to log in and create a profile. Users can add a vehicle to their profile and set whether or not they'd like to receive notifications about stolen vehicles in their area. They can create public posts about their vehicles or suspicious vehicles an they can share tips about vehicle theft prevention and recovery.

## Features

- JWT Auth
- Scan license plates
- Create and edit profile
- Create, edit and delete posts
- Front-end and back-end form validation

## Technologies and Frameworks

- OpenALPR
- React-Native
- React-Native Paper
- React-Native Vector Icons
- Mongoose
- MongoDB
- Node.js
- Express
- MLab
- JWT
- BCyrpt

## Plans for the future

- Users can choose to be alerted when a stolen vehicle is posted in their area

- User will be alerted if their vehicle is scanned

- "Last seen" map will be added to vehicle details page

- App will capture a photo when a stolen vehicle is scanned
