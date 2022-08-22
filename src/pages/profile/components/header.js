
export default function Header({user}) {
  return (
    <header className="flex items-center px-24 gap-x-24 py-4 pb-10">
      <img className="w-[150px] h-[150px] rounded-full" src="https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=YpENMQZgy80AX9KVgdz&edm=AKBKmG8AAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT8ZPoFh0rG6JQRiWIhnitzrOvRZq65srIwWOJZylyx6zA&oe=630A26CF&_nc_sid=2cfe3e" alt="" />
      <div>
       
       <div className="mb-4">
       <h1 className="text-[28px] font-light">{user.username}</h1>
       </div>

        <nav className="flex gap-x-10 items-center">

          <div><span className="font-semibold">{user.posts}</span> posts</div>
          <div><span className="font-semibold">{user.followers ===[] ? user.followers.length : "0"} </span>followers</div>
          <div><span className="font-semibold">{user.following ===[] ? user.following.length : "0"} </span>following </div>
        
        </nav>
      </div>
    </header>
  )
}
