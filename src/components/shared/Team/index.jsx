const people = [
  {
    name: "Farhan",
    role: "Frontend Developer",
    imageUrl:
      "https://th.bing.com/th/id/R.ee8b4c219e0a395a6644f8b95c1aad8d?rik=25VDOozkQS0N0g&riu=http%3a%2f%2ffc01.deviantart.net%2ffs71%2fi%2f2013%2f263%2f9%2f7%2fnaruto_bijuu_sage_mode_by_nakamurakenji1993-d6n4l2r.jpg&ehk=UauRswSVPONBU0FSm5baohUoe%2ffE3Q2W55wjfXn5gLQ%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Gamal",
    role: "Backand Developer",
    imageUrl:
      "https://comicvine.gamespot.com/a/uploads/original/11160/111605805/8543076-luffy_gear_5_by_xavierjvg_df4256z-fullview.jpg",
  },
  {
    name: "Prasetyo",
    role: "Design UI/UX Developer",
    imageUrl:
      "https://th.bing.com/th?q=Ichigo+Hollow+Mask+Mode&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-ID&cc=ID&setlang=en&adlt=strict&t=1&mw=247",
  }
]

export default function Team() {
  return(
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto"> 
      < div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="flex flex-wrap -m-2">
          {people.map((person) => (
            <div key={person.name} className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img src={person.imageUrl} className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"/>
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">{person.name}</h2>
                  <p className="text-gray-500">{person.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}