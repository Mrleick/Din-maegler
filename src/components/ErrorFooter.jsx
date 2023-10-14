const ErrorFooter = () => {
  return (
    <div className="bg-errorfooterbg">
      <section className="flex w-[1054px] justify-center mx-auto gap-[2em] py-[100px]">
        <article className="flex flex-col max-w-[350px]">
          <h3 className="text-white mb-[32px]">Ghor Bari</h3>
          <p>
            There are many variations of passages Lorem Ipsum available, but the
            majority is have suffered alteration.
          </p>
        </article>
        <article className="flex flex-col max-w-[333px]">
          <h3 className="text-white mb-[32px]">Important links</h3>
          <p>Important link</p>
          <p>Important link</p>
          <p>Important link</p>
          <p>Important link</p>
          <p>Important link</p>
        </article>
        <article className="flex flex-col max-w-[294px]">
          <h3 className="text-white mb-[32px]">Follow Instagram</h3>
          <section className="grid grid-cols-3 gap-[12px]">
            <img src="https://placehold.co/60x60" alt="Placeholder" />
            <img src="https://placehold.co/60x60" alt="Placeholder" />
            <img src="https://placehold.co/60x60" alt="Placeholder" />
            <img src="https://placehold.co/60x60" alt="Placeholder" />
            <img src="https://placehold.co/60x60" alt="Placeholder" />
            <img src="https://placehold.co/60x60" alt="Placeholder" />
          </section>
        </article>
      </section>
      <div className="bg-shape3 w-[1110px] h-[1px] mx-auto"></div>
      <p className="text-center">All Right Reserve By Jit Banik 2020</p>
    </div>
  );
};

export default ErrorFooter;
