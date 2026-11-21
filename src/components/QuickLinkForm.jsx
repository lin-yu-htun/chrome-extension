const QuickLinkForm = () => {
  return (
    <form className="add-link-form">
      <input type="name" placeholder="Name" />
      <input type="url" placeholder="URL" />
      <button type="submit">Save</button>
    </form>
  );
};

export default QuickLinkForm;
