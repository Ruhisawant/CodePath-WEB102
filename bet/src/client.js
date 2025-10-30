import { createClient } from '@supabase/supabase-js'

const URL = 'https://qdwafvpbgwzubeecgkgr.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkd2FmdnBiZ3d6dWJlZWNna2dyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4MjYyNDQsImV4cCI6MjA3NzQwMjI0NH0.aRGQtC9gXpfZmhHNIhWFH4arioYcLl0-L7RfxMT9NOU'

export const supabase = createClient(URL, API_KEY)