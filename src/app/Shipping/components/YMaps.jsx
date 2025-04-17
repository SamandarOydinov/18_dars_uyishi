import React from 'react';

function YMaps(props) {
    return (
        <div>
            <div style={{ margin: "0 auto", borderRadius: "30px", maxWidth: "1000px", overflow: "hidden" }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30880.22596671989!2d-16.255624571670793!3d14.65433811345127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xeea1740e6d264c5%3A0xc6405dbbb1df2611!2sDiourbel%20Railway%20Station!5e0!3m2!1sen!2s!4v1744715829241!5m2!1sen!2s"
                    width={1000}
                    height={400}
                    style={{border:0}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div style={{ position: "relative", overflow: "hidden", maxWidth: "1000px", margin: "0 auto", borderRadius: "30px" }}>
                <a href="https://yandex.uz/maps/org/najot_ta_lim/94800077397/?utm_medium=mapframe&utm_source=maps"
                    style={{ color: "#eee", fontSize: "12px", position: "absolute", top: 0 }}>
                    Najot ta'lim
                </a>
                <a href="https://yandex.uz/maps/10335/tashkent/category/educational_center/184106168/?utm_medium=mapframe&utm_source=maps"
                    style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px", }}>
                    O‘quv markazi  Toshkentda</a>
                <a href="https://yandex.uz/maps/10335/tashkent/category/computer_courses/184106158/?utm_medium=mapframe&utm_source=maps"
                    style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "28px" }} >
                    Kompyuter kurslari  Toshkentda</a>
                <iframe
                    src="https://yandex.uz/map-widget/v1/?ll=69.204780%2C41.287015&mode=poi&poi%5Bpoint%5D=69.203615%2C41.285708&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D94800077397&z=17.18"
                    width={1000}
                    height={400}
                    frameBorder={0}
                    allowFullScreen={true}
                    style={{ position: "relative" }}></iframe>
            </div>
        </div>
    )
}

export default YMaps;