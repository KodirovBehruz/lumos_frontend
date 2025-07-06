export interface IReviewsResponseContract {
    id: string
    createdAt: string,
    title: string
    slug: string
    text: string
    rating: number
    author: {
        username: string
        email: string
        phoneNumber: string
    }
}