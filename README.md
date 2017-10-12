# hacktiv-press Indraprahastha

# Nama Aplikasi
<p>Hacktiv-press</p>

# Deskripsi Aplikasi
<p>Aplikasi Sistem Blog</p>

## Aplikasi Hacktiv-press

<h3> Daftar Route Dasar </h3>

<h4> User </h4>
<table>
  <tr>
    <th>Route</th>
    <th>HTTP</th>
    <th>Deskripsi</th>
  </tr>
  <tr>
    <td>/User/login</td>
    <td>POST</td>
    <td>Login User</td>
  </tr>
  <tr>
    <td>/User/daftar</td>
    <td>POST</td>
    <td>Signup User</td>
  </tr>
</table>

<h4> Artikel </h4>
<table>
  <tr>
    <th>Route</th>
    <th>HTTP</th>
    <th>Deskripsi</th>
  </tr>
  <tr>
    <td>/artikel</td>
    <td>POST</td>
    <td>Membuat Artikel</td>
  </tr>
  <tr>
    <td>/artikel</td>
    <td>GET</td>
    <td>Cari semua artikel</td>
  </tr>
  <tr>
    <td>/artikel/:id</td>
    <td>GET</td>
    <td>Membaca satu artikel</td>
  </tr>
  <tr>
    <td>/artikel/:id</td>
    <td>PUT</td>
    <td>Update artikel</td>
  </tr>
  <tr>
    <td>/artikel/:id</td>
    <td>DELETE</td>
    <td>Delete satu artikel</td>
  </tr>
</table>

## Penggunaan:
npm install di client & server,
nodemon app.js di server,
npm run dev di client
