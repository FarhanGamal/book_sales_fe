import { useEffect, useState } from "react";
import { getAuthors, updateAuthor } from "../../../services/author";
import { useNavigate, useParams } from "react-router-dom";

export default function AuthorEdit() {
  const[errors, setErrors] = useState({})

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  // Destruck ID dari URL
  const { id } = useParams();
  const navigate = useNavigate()

  // fetch data buku berdasarkan ID
  const fetchAuthorsDetails = async () => {
    const data = await getAuthors(); // ambil semuah data buku

    // cari data buku berdasarkan ID

    const author = data.find((author) => author.id === parseInt(id));
    if (author) {
      // Asign data to state
      setName(author.name);
      setBio(author.bio);
    }
  };


  useEffect(() => {
    fetchAuthorsDetails()
  }, [])

  // handle file change
  const handleFileChange = (e) => {
    setImage(e.target.files[0])
  }

  // update author data
  const updateAuthorDetail = async (e) => {
    e.preventDefault()

    // buat FormData
    const authorData = new FormData()

    authorData.append('name', name)
    authorData.append('bio', bio)
    authorData.append('_method', 'PUT')

    if (image) {
      authorData.append('photo', image)
    }
    await updateAuthor(id, authorData)
    .then(() => {
      // redirect ke halaman index
      navigate('/admin/authors')
    })
    .catch((err) => {
      console.log(err)
      setErrors(err.response.data.message)
    })
  }
  
  return (
    <div className="flex flex-col gap-9">
      <div
        className="rounded-sm bg-white shadow-default dark:bg-boxdark"
      >
        <div
          className="border-b border-stroke px-6.5 py-4 dark:border-strokedark"
        >
          <h3 className="font-medium text-black dark:text-white">
            Edit Data
          </h3>
        </div>
        <form onSubmit={ updateAuthorDetail } className="py-5">
          <div className="p-6.5 flex flex-col gap-5">
            
            <div className="mb-4.5">
              <label
                className="mb-3 block text-base font-medium text-black dark:text-white"
              >
                Name
              </label>
              {errors.name && (
                <div className="p-2 my-2 text-red-800 rounded-lg bg-red-50" role="alert">
                  <span className="font-medium">{errors.name[0]}</span>
                </div>
                )}
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
              />
            </div>

            <div className="mb-4.5">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
              >
                Photo
              </label>
              {errors.photo && (
                <div className="p-2 my-2 text-red-800 rounded-lg bg-red-50" role="alert">
                  <span className="font-medium">{errors.photo[0]}</span>
                </div>
              )}
              <input
                onChange={handleFileChange}
                type="file"
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-normal outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-indigo-600 file:hover:bg-opacity-10 focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-indigo-600"
              />
            </div>

            <div className="mb-4.5">
              <label
                className="mb-3 block text-base font-medium text-black dark:text-white"
              >
                Bio
              </label>
              {errors.bio && (
                <div className="p-2 my-2 text-red-800 rounded-lg bg-red-50" role="alert">
                  <span className="font-medium">{errors.bio[0]}</span>
                </div>
              )}
              <textarea
                name="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows="6"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
              ></textarea>
            </div>


            <button
              type="submit"
              className="flex w-full justify-center rounded bg-indigo-600 p-3 font-medium text-white hover:bg-opacity-90"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
