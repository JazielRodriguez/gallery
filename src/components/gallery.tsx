const Gallery: React.FC = () => {
  return (
    <div className="px-8 py-4 w-[85%] min-h-screen">
      <p className="text-3xl py-4">Preview</p>
      <div className="flex flex-wrap gap-2">
        <img
          className="w-[16rem] h-[16rem] object-cover rounded"
          src="https://images.pexels.com/photos/17221327/pexels-photo-17221327/free-photo-of-blanco-y-negro-moda-hombre-traje.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <img
          className="w-[16rem] h-[16rem] object-cover rounded"
          src="https://images.pexels.com/photos/9039243/pexels-photo-9039243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <img
          className="w-[16rem] h-[16rem] object-cover rounded"
          src="https://images.pexels.com/photos/19151869/pexels-photo-19151869/free-photo-of-dcim-101-media-dji-0261-jpg.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
        <img
          className="w-[16rem] h-[16rem] object-cover rounded"
          src="https://images.pexels.com/photos/6224725/pexels-photo-6224725.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
        <img
          className="w-[16rem] h-[16rem] object-cover rounded"
          src="https://images.pexels.com/photos/10752108/pexels-photo-10752108.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
        <img
          className="w-[16rem] h-[16rem] object-cover rounded"
          src="https://images.pexels.com/photos/11101879/pexels-photo-11101879.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
      </div>
    </div>
  );
};
export default Gallery;
