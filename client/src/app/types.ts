export type courseType={
        id: number,
        title: string,
        description: string,
        likes: number,
        views: number,
        publisher:publiser,
        image: string,
        content:string[],
        searchWords:string[]
}
type publiser={
        name:string,
        phone:string,
        image:string,
        description:string
}

type ProjectIdea={
        id:number,
        title:string,
        description:string,
        level:string,
        requirements:string[],
        image:string,
        period:number[]
}