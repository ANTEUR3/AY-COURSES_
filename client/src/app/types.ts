export type courseType={
        id: number,
        title: string,
        description: string,
        likes: number,
        views: number,
        publisher:publiser,
        image: string,
        content:string[]
}
type publiser={
        name:string,
        phone:string,
        image:string,
        description:string
}