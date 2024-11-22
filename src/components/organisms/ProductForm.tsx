import Button from "../atoms/Button";
import Form from "../atoms/Form";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

const ProductForm: React.FC = () => {
  return (

    <Form action="<%= submitPath %>?_csrf=<%= locals.csrfToken %>" method="POST" encType="multipart/form-data">
      <p>
        <Label htmlFor="title">Title</Label>
        <Input type="text" id="title" name="title" value="<%= product.title %>" required />
      </p>

      <div id="image-upload-control">
        <p>
          <Label htmlFor="image">Image</Label>
          <Input type="file" id="image" name="image" accept="image/png,image/jpg"
          // <% if (imageRequired) { %> required <% } %> 
          />
        </p>

        <img src="" alt="Selected image." />
      </div>


      <p>
        <Label htmlFor="summary">Summary</Label>
        <Input type="text" id="summary" name="summary" value="<%= product.summary %>" required max="250" />
      </p>

      <p>
        <Label htmlFor="price">Price</Label>
        <Input type="number" id="price" name="price" value="<%= product.price %>" min="0.01" step="0.01" required />
      </p>

      <p>
        <Label htmlFor="description">Description</Label>
        <textarea id="description" name="description" rows={7} required>
          {/* <%= product.description %> */}
        </textarea>
      </p>

      <p>
        <Button type="reset" $alt>Reset</Button>
        <Button>Save</Button>
      </p>
    </Form>

  );
}


export default ProductForm