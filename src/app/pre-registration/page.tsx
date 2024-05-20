import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"

export default function Page() {
  return (
      <div className='bg-gradient-to-r from-[#e6f0ff] to-[#e6f8ff]'>
        <div className="mx-auto max-w-md space-y-6 py-12 px-4 sm:px-6 lg:px-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-[#0077b6]">Pre-Registration</h1>
            <p className="text-[#4d4d4d] dark:text-[#c4c4c4]">
              Sign up now to reserve your spot and be the first to access our new platform.
            </p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label className="text-[#0077b6]" htmlFor="name">
                Name
              </Label>
              <Input className="border-[#0077b6] focus:ring-[#0077b6]" id="name" placeholder="Enter your name"
                     required/>
            </div>
            <div className="space-y-2">
              <Label className="text-[#0077b6]" htmlFor="email">
                Email
              </Label>
              <Input
                  className="border-[#0077b6] focus:ring-[#0077b6]"
                  id="email"
                  placeholder="Enter your email"
                  required
                  type="email"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-[#0077b6]" htmlFor="password">
                Password
              </Label>
              <Input
                  className="border-[#0077b6] focus:ring-[#0077b6]"
                  id="password"
                  placeholder="Enter a password"
                  required
                  type="password"
              />
            </div>
            <Button className="w-full bg-[#0077b6] hover:bg-[#005a8f] text-white" type="submit">
              Register
            </Button>
          </form>
        </div>
      </div>
  )
}