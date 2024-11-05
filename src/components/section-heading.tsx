type Props = {
  label: string;
};
const SectionHeading = ({ label }: Props) => {
  return (
    <h2 className='text-3xl text-slate-900 capitalize mb-8 text-center dark:text-slate-100'>
      {label}
    </h2>
  );
};

export default SectionHeading;
