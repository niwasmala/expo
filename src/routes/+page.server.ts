// src/routes/+page.server.ts
import { redirect, fail } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ url, locals: { getSession } }) => {
  const session = await getSession()

  // if the user is already logged in return them to the lobby page
  if (session) {
    throw redirect(303, '/lobby')
  }

  return { url: url.origin }
}

export const actions = {
  login: async ({ request, url, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      return fail(500, { message: 'Server error. Try again later.', success: false, email })
    }

    return {
      success: true,
    }
  }
};