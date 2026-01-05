"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Github, ChromeIcon } from 'lucide-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { authClient } from '@/lib/auth-client'

const LoginPage = () => {
    const handleGoogleSign = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/dashboard"
        })
    }
    const handleGithubSign = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
             callbackURL: "/dashboard"
        })
    }
  return (
    <div className='min-h-screen flex justify-center items-center bg-background p-4'>
        <Card className="w-full  max-w-md">
            <CardHeader className="text-center">
                <CardTitle className="text-xl font-bolde">Welcome Back</CardTitle>
                <CardDescription className="text-muted-foreground">Sign in to your account using prefered provider</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <Button onClick={handleGoogleSign} variant='outline' className="w-full h-10 text-base bg-transparent">
                    <ChromeIcon/>
                    <p>Continue with Google</p>
                </Button>
                <Button onClick={handleGithubSign} variant='outline' className="w-full h-10 text-base bg-transparent">
                    <Github/>
                    <p>Continue with Github</p>
                </Button>
            </CardContent>
        </Card>

      
    </div>
  )
}

export default LoginPage
