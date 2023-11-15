export function ImageUpload({ setImage }) {
  const labelStyle = 'text-zinc-900 font-semibold text-[18px]'

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImage(reader.result)
    }
  }
  return (
    <>
      <label className={labelStyle}>
        Upload Image:
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </label>
    </>
  )
}
