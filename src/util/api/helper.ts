interface Options {
    method?: string,
    headers: {
        accept:string
        authorization:string
        cache: string
    },
    body?: BodyInit | null | undefined
}

const createOpts = (method?:string):Options => {
    return {
        "method": method,
        "headers": {
            accept: 'application/json',
            authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
            cache: 'no-cache'
        }
    }
}




export {
    createOpts
}

