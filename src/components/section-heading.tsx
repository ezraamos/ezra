type Props = {
  label: string;
};
const SectionHeading = ({ label }: Props) => {
  return <h2 className='text-3xl capitalize mb-8'>{label}</h2>;
};

export default SectionHeading;
