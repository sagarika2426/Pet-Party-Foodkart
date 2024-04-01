const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-2">Contact Us </h1>
      <form>
        <input className="border border-black p-2 m-2" type="text" placeholder="Full Name"></input>
        <div>
          <textarea rows="5" cols="40" className="border border-black p-2 m-2" type="text" placeholder="Message"></textarea>
        </div>
        <button className="border border-black p-2 m-2 bg-slate-300 rounded-sm">Submit</button>

      </form>
    </div>
  );
};
export default Contact;
