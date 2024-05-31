export interface IRestaurant {
	id: number
	name: string
	priceRating: '$$$$' | '$$$' | '$$' | '$'
	kitchens: string[]
	rating: number
	destination: number
	imgSrc: string
	tag: string
}
