// import { div } from "three/tsl"

function UserProfileCard({ user, theme }) {
  return (
    <div className={`p-6 rounded-xl ${theme.backgroundColor} ${theme.textColor} border-l-4 ${theme.borderColor} shadow-md`}>
      <div className="flex items-center mb-4">
        <div className={`${theme.avatarBg} p-3 inline-block rounded-[50%]`}>{user.avatar}</div>
        <div className="gap-1 inline-block ml-4">
          <div className="font-bold ">{user.name}</div>
          <div className="text-xs font-medium m-1">{user.email}</div>
          <div>
            <span className={`${theme.badgeBg} px-2 py-1 rounded-2xl text-xs mr-2`}>{user.role}</span>
            <span className={`${theme.badgeBg} px-2 py-1 rounded-2xl text-xs `}>{user.status}</span>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-black "></div>
      {/* <span>{user.stats.post}</span> */}
      {user.stats && (
        <div className="flex justify-around items-center my-3">
          {Object.entries(user.stats).map(([key, value]) => (
            <div className="flex flex-col items-center justify-between">
              <div className="text-xl font-bold">{value}</div>
              <div className="text-xs font-medium">{key}</div>
            </div>
          ))}
        </div>
      )}
      <div className="flex gap-1">
        <button className={`px-4 py-1.5 rounded-lg w-1/2 font-medium ${theme.avatarBg} text-white hover:opacity-90`}>
          Primary Action
        </button>
        <button className={`px-4 py-1.5 rounded-lg w-1/2 font-medium bg-gray-200 text-black hover:opacity-90`}>
          Primary Action
        </button>
      </div>
    </div>
  )
}


const ComplexProps = () => {

  const users = [
    {
      user: {
        name: "John Doe",
        email: "john@gmail.com",
        avatar: "👻",
        role: "Developer",
        status: "online",
        stats: {
          post: 24,
          commits: 20,
          reviews: 89,
        },
      },
      theme: {
        backgroundColor: "bg-purple-200",
        textColor: "text-gray-700",
        avatarBg: "bg-purple-600",
        badgeBg: "bg-purple-300",
        borderColor: "border-purple-500",
      },
      actions: {
        primary: {
          label: "View Profile",
          // onClick: () => setMessage("Viewing Alice's profile"),
          className: "bg-purple-500 text-white hover:bg-purple-600",
        },
        secondary: {
          label: "Message",
          // onClick: () => setMessage("Opening message"),
          className: "bg-yellow-200 text-gray-700 hover:bg-yellow-300",
        }
      }
    },
    {
      user: {
        name: "Alice Smith",
        email: "alice@company.com",
        avatar: "🦊",
        role: "UI/UX Designer",
        status: "away",
        stats: {
          post: 18,
          commits: 42,
          reviews: 61,
        },
      },
      theme: {
        backgroundColor: "bg-indigo-200",
        textColor: "text-gray-800",
        avatarBg: "bg-indigo-600",
        badgeBg: "bg-indigo-300",
        borderColor: "border-indigo-500"
      },
      actions: {
        primary: {
          label: "View Portfolio",
          // onClick: () => setMessage("Viewing Alice's portfolio"),
          className: "bg-indigo-500 text-white hover:bg-indigo-600",
        },
        secondary: {
          label: "Send Message",
          // onClick: () => setMessage("Messaging Alice"),
          className: "bg-gray-200 text-gray-700 hover:bg-gray-300",
        },
      },
    }

  ]

  return (
    <div className="space-y-8 bg-white rounded-xl px-4 py-5">
      <div>
        <h3 className="text-2xl font-bold mb-3">Complex/Nested Props</h3>
        <p className="text-[11px] text-gray-700 font-medium">Complex props allow you to nested object and functions, enabling sophisticated component configurations nad interactions.</p>
        <div>
          <h2>User Profile Card(Nested User,Theme and Actions</h2>
          <div className="grid grid-cols-2 gap-2">
            {users.map((userData, index) => (
            <UserProfileCard key={index} {...userData} />
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComplexProps
