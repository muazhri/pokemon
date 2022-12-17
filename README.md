POKEMON

1. Buat 1 file component Chosen.jsx, isi dengan div terluar dengan id chosen-one
2. Buat 1 file component PokemonList.jsx isi dengan div terluar dengan id pokemon-list
3. Buat 1 file component Others.jsx dan isi dengan component lain minimal 4 component reusable
4. Buat 1 file Page.jsx & gunakan data pokemon.js untuk merender gabungan component2 1-3
5. Import Page.jsx ke dalam App.js
6. Tambahkan onClick event dan ganti chosen-one dengan hasil pilihan
7. Fetch ke https://pokeapi.co/api/v2/pokemon
8. Dapat informasi url lalu fetch berdasarkan url masing2 pokemon
9. Dapatkan informasi imageUrl dari sprites.other.dream_world.front_default, name dari name
10. Masukan ke dalam array pokemons dan ganti hasil render pokemon dengan menggunakan hasil dari fetch (array pokemons)
11. BONUS: Tambahkan button load more dan update array pokemons

12. Buat branch baru (git) sesi-tiga
13. Buat folder page & component
14. Pindah seluruh file komponen ke dalam folder "component" selain Page.jsx
15. Rename Page.jsx menjadi Homepage.jsx dan pindahkan ke folder "page"
16. Atur halaman dengan react router DOM dan pastikan Homepage berada pada route "/"

17. Tambahkan halaman location dengan route "/location" dan ambil data listing location dari "https://pokeapi.co/api/v2/location-area", tambahkan button dimana ketika diclick akan redirect ke halaman "/location/:id" contoh "/location/1"

18.Tambahkan halaman pokemons dengan route "/location/:id" dan ambil data listing location dari "https://pokeapi.co/api/v2/location-area/${id}", halaman ini mirip seperti halaman homepage hanya beda data pokemons saja dimana data pokemons diambil dari "pokemon_encounters". Tambahkan h1 di paling atas halaman dengan data dari nama location.

19. Di page home, ketika pilih pokemon, maka simpan informasi nama pokemon yang dipilih ke dalam local storage.

20. Buat halaman login sederhana, isinya sesuai dengan postman yang dibagikan

21. Ketika sudah mendapatkan token, maka simpan ke dalam local storage

22. Akses halaman location detail (contoh /location/1), ketika pilih pokemon simpan informasi nama pokemon pilihan ke dalam local storage lalu redirect ke halaman /fight

23. Buat halaman /fight dimana kalian mensimulasikan pertarungan pokemon dari halaman home dengan pokemon pilihan dari location, HP awal adalah masing-masing 100. Jika kalah maka kurangi darah pokemon yang kalah sebesar 10 HP. Ketika salah satu sudah 0 maka tampilkan pesan apakah kalau atau menang. Simulasi pertarungan kalian gunakan request fight pada postman collection



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
