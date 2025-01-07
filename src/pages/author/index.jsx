import { useRef } from "react";
import authors from "../../utils/constants/authors"

export default function Author() {
  let authorList = [...authors];
  const authorContainerRef = useRef(null); // salin data array counstants/authors

  const handleClick = () => {
    const newAuthor = {
      name: "jhon Doe",
      imageUrl: "https:loremfaces.net/96/id/5.jpg",
      bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    }

    authorList.push(newAuthor);

    if (authorContainerRef.current) {
      const newAuthorElement = document.createElement("div");
      newAuthorElement.className = "p-2 lg:w-1/4 md:w-1/2 w-full";
      newAuthorElement.innerHTML = `
      <img src="${newAuthor.imageUrl}" />
      <h2>${newAuthor.name}</h2>
      <p>${newAuthor.bio}</p>
      `;
    
      authorContainerRef.current.appendChild(newAuthorElement);
      
    }
    console.log(authorList);
    alert("Data berhasil ditambahkan")
  }


  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto"> 
      < div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Authors</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div ref={authorContainerRef} className="flex flex-wrap -m-2">
          {authorList.map((person) => (
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
          <button onClick={handleClick} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>

      </div>
    </section>
  )
}