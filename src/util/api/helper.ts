import { createClient } from "@supabase/supabase-js";

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

const supabaseClient = async (supabaseAccessToken:string) => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string

    const supabase = createClient(supabaseUrl, supabaseKey, {
      global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
    });
    // set Supabase JWT on the client object,
    // so it is sent up with all Supabase requests
    return supabase;
  };
  




export {
    createOpts,
    supabaseClient
}

