import { ChangeEvent, FormEvent, useContext, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BiCategoryAlt, BiSortDown } from "react-icons/bi";

import { IMyContext, MyContext } from "~/context/ProductsProvider";

import { Container, InputDiv, SelectDiv } from "./Filters.style";
import { IGetCategories } from "~/types";
import { getCategories } from "~/client";

export function Filters() {
  const { setFilters, filters } = useContext<IMyContext>(MyContext);
  const [categories, setCategories] = useState<IGetCategories[]>([]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(filters);

    const value = e.target[0].value;

    setFilters!((old) => {
      return {
        ...old,
        query: value,
      };
    });
  }

  function changeCategory(e: ChangeEvent<HTMLSelectElement>) {
    e.preventDefault();

    const value = e.target.value;

    if (value)
      setFilters!((old) => {
        return {
          ...old,
          category: value,
        };
      });
  }

  function changeSort(e: ChangeEvent<HTMLSelectElement>) {
    e.preventDefault();

    const value = e.target.value;

    if (value)
      setFilters!((old) => {
        return {
          ...old,
          order: value,
        };
      });
  }

  useMemo(() => {
    (async () => {
      await getCategories().then((response) => {
        setCategories(response as IGetCategories[]);
      });
    })();
  }, []);

  return (
    <Container>
      <InputDiv>
        <form onSubmit={(e) => onSubmit(e)}>
          <input type="text" placeholder="Digite o nome do produto" />
          <button type="submit">
            <FaSearch size={16} />
          </button>
        </form>
      </InputDiv>
      <SelectDiv>
        <BiCategoryAlt size={20} />
        <select defaultValue="" onChange={(e) => changeCategory(e)}>
          <option disabled value="" selected>
            Categoria
          </option>
          <option value="all">Todas Categorias</option>
          {categories &&
            categories.map(({ _id, name }) => (
              <option key={_id} value={name}>
                {name}
              </option>
            ))}
        </select>
      </SelectDiv>
      <SelectDiv>
        <BiSortDown size={20} />
        <select defaultValue="" onChange={(e) => changeSort(e)}>
          <option disabled value="" selected>
            Ordenar
          </option>
          <option value="priceC">Menor Preço</option>
          <option value="priceD">Maior Preço</option>
          <option value="nameC">Nome [a-z]</option>
          <option value="nameD">Nome [z-a]</option>
        </select>
      </SelectDiv>
      <SelectDiv
        onClick={() => setFilters!({ order: "nameD", category: "", query: "" })}
      >
        <p>Limpar Filtros</p>
      </SelectDiv>
    </Container>
  );
}
