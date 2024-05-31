import type { IRestaurant } from './restaurant.interface'

export const restaurants: IRestaurant[] = [
	{
		id: 1,
		destination: 1.5,
		imgSrc:
			'https://cdn.lifehacker.ru/wp-content/uploads/2018/03/shutterstock_278416631-1_1592808634-630x315.jpg',
		kitchens: ['Russian', 'German', 'French'],
		name: 'The James SoHo',
		priceRating: '$$$$',
		rating: 3.1,
		tag: 'Cafe'
	},
	{
		id: 2,
		destination: 12.5,
		imgSrc:
			'https://aif-s3.aif.ru/images/015/573/91c0d7c133aa580e0c368bb536b053a1.jpg',
		kitchens: ['American', 'French'],
		name: 'Sandwich Club',
		priceRating: '$',
		rating: 3,
		tag: 'Cafe'
	},
	{
		id: 3,
		destination: 0.5,
		imgSrc:
			'https://0d314c86-f76b-45cc-874e-45816116a667.selcdn.net/9a403475-c0f0-426c-8598-7ae51ffb00b9.jpeg',
		kitchens: ['American', 'Russian'],
		name: 'Saint PetersBurgers',
		priceRating: '$$$',
		rating: 5,
		tag: 'Cafe'
	},
	{
		id: 4,
		destination: 2.5,
		imgSrc: 'https://islamdag.ru/sites/img/stati/2011/3kv/eda02_b.jpg',
		kitchens: ['Russian'],
		name: 'Rostics 2.0',
		priceRating: '$',
		rating: 4.1,
		tag: 'Cafe'
	},
	{
		id: 5,
		destination: 3.5,
		imgSrc:
			'https://static-actual-production.chibbis.ru/0ad0d3e8a83d93550b344aab09f86493.jpeg',
		kitchens: ['Russian', 'Georgia'],
		name: 'Vaha Lavka',
		priceRating: '$$',
		rating: 5,
		tag: 'Cafe'
	},
	{
		id: 6,
		destination: 3,
		imgSrc:
			'https://cdn.britannica.com/50/80550-050-5D392AC7/Scoops-kinds-ice-cream.jpg',
		kitchens: ['Russian'],
		name: 'Ice Land',
		priceRating: '$',
		rating: 5,
		tag: 'Ice cream'
	},
	{
		id: 7,
		destination: 1.9,
		imgSrc:
			'https://assets-global.website-files.com/5e9ebc3fff165933f19fbdbe/61b31c9d289e22335b6753b2_Ice%20Cream%202.jpg',
		kitchens: ['Russian'],
		name: 'Ice Cream Shop',
		priceRating: '$$',
		rating: 4.9,
		tag: 'Ice cream'
	}
]
