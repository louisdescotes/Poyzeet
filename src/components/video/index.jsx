export default function Video() {
    return (
      <section>
        {/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
        <video controls>
            <source src="/video/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </section>

    );
  }
  