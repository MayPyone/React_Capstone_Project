import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './Detail';
import DisplayHome from './DisplayHome';

export default function Switch() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<DisplayHome />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
