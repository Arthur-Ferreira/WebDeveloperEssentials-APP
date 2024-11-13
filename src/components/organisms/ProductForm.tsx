import Button from "../atoms/Button";

const ProductForm: React.FC = () => {
  return (

    <form action="<%= submitPath %>?_csrf=<%= locals.csrfToken %>" method="POST" encType="multipart/form-data">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value="<%= product.title %>" required />
      </p>

      <div id="image-upload-control">
        <p>
          <label htmlFor="image">Image</label>
          <input type="file" id="image" name="image" accept="image/png,image/jpg"
          // <% if (imageRequired) { %> required <% } %> 
          />
        </p>

        <img src="" alt="Selected image." />
      </div>


      <p>
        <label htmlFor="summary">Summary</label>
        <input type="text" id="summary" name="summary" value="<%= product.summary %>" required max="250" />
      </p>

      <p>
        <label htmlFor="price">Price</label>
        <input type="number" id="price" name="price" value="<%= product.price %>" min="0.01" step="0.01" required />
      </p>

      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows={7} required>
          {/* <%= product.description %> */}
        </textarea>
      </p>

      <p>
        <Button type="reset" $alt>Reset</Button>
        <Button>Save</Button>
      </p>
    </form>

  );
}


export default ProductForm