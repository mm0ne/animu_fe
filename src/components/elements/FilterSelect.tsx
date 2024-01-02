interface FilterSelectProps<T> {
  options: T[];
}

export interface OptionValue {
  name: string;
  id: number;
}

export default function FilterSelect<T>({ options }: FilterSelectProps<T>) {
  const values = options as OptionValue[];
  return (
    <select name="select" className="select select-warning w-full md:max-w-[10em] max-h-[1vh]">
      <option disabled defaultValue={""} selected>
        Genre
      </option>
      <option value={"all"}>
        Genre (All)
      </option>
      {values.map((x, i) => {
        return (
          <option key={i} value={x.id}>
            {x.name}
          </option>
        );
      })}
    </select>
  );
}
