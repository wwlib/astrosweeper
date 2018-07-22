(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.Ship_body = Container.extend(function () {
        Container.call(this);
        var instance31 = new Graphics()
            .drawCommands(shapes.ship[23]);
        var instance30 = new Graphics()
            .drawCommands(shapes.ship[22]);
        var instance29 = new Graphics()
            .drawCommands(shapes.ship[21]);
        var instance28 = new Graphics()
            .drawCommands(shapes.ship[20]);
        var instance27 = new Graphics()
            .drawCommands(shapes.ship[19]);
        var instance26 = new Graphics()
            .drawCommands(shapes.ship[18]);
        var instance25 = new Graphics()
            .drawCommands(shapes.ship[17]);
        var instance24 = new Graphics()
            .drawCommands(shapes.ship[16]);
        var instance23 = new Graphics()
            .drawCommands(shapes.ship[15]);
        var instance22 = new Graphics()
            .drawCommands(shapes.ship[14]);
        var instance21 = new Graphics()
            .drawCommands(shapes.ship[13]);
        var instance20 = new Graphics()
            .drawCommands(shapes.ship[12]);
        var instance19 = new Graphics()
            .drawCommands(shapes.ship[7])
            .setTransform(-129.85, -515.9, 3.595, 14.625);
        var instance18 = new Graphics()
            .drawCommands(shapes.ship[11]);
        var instance17 = new Graphics()
            .drawCommands(shapes.ship[10]);
        var instance16 = new Graphics()
            .drawCommands(shapes.ship[9]);
        var instance15 = new Graphics()
            .drawCommands(shapes.ship[8]);
        var instance14 = new Graphics()
            .drawCommands(shapes.ship[7])
            .setTransform(12.5, -3.8, 0.75);
        var instance13 = new Graphics()
            .drawCommands(shapes.ship[7]);
        var instance12 = new Graphics()
            .drawCommands(shapes.ship[6])
            .setTransform(-31.45, -35.6, 1.553, 1.515);
        var instance11 = new Graphics()
            .drawCommands(shapes.ship[6]);
        var instance10 = new Graphics()
            .drawCommands(shapes.ship[5]);
        var instance9 = new Graphics()
            .drawCommands(shapes.ship[4])
            .setTransform(-45.7, 0.95, 0.992);
        var instance8 = new Graphics()
            .drawCommands(shapes.ship[4]);
        var instance7 = new Graphics()
            .drawCommands(shapes.ship[3]);
        var instance6 = new Graphics()
            .drawCommands(shapes.ship[2])
            .setTransform(-30.55, 18.45, 0.698, 0.717);
        var instance5 = new Graphics()
            .drawCommands(shapes.ship[2])
            .setTransform(22.95, 19.9, 0.714, 0.717);
        var instance4 = new Graphics()
            .drawCommands(shapes.ship[2])
            .setTransform(-31.15, 21.25, 0.714, 0.717);
        var instance3 = new Graphics()
            .drawCommands(shapes.ship[2]);
        var instance2 = new Graphics()
            .drawCommands(shapes.ship[1]);
        var instance1 = new Graphics()
            .drawCommands(shapes.ship[0]);
        this.addChild(instance31, instance30, instance29, instance28, instance27, instance26, instance25, instance24, instance23, instance22, instance21, instance20, instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.Ship_pods = Container.extend(function () {
        Container.call(this);
        var instance9 = new Graphics()
            .drawCommands(shapes.ship[30]);
        var instance8 = new Graphics()
            .drawCommands(shapes.ship[27])
            .setTransform(-13.85);
        var instance7 = new Graphics()
            .drawCommands(shapes.ship[26])
            .setTransform(-13.75);
        var instance6 = new Graphics()
            .drawCommands(shapes.ship[29]);
        var instance5 = new Graphics()
            .drawCommands(shapes.ship[28]);
        var instance4 = new Graphics()
            .drawCommands(shapes.ship[27]);
        var instance3 = new Graphics()
            .drawCommands(shapes.ship[26]);
        var instance2 = new Graphics()
            .drawCommands(shapes.ship[25]);
        var instance1 = new Graphics()
            .drawCommands(shapes.ship[24]);
        this.addChild(instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.explode_1 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.ship[31])
            .setTransform(-53, -122);
        this.addChild(instance1);
    });

    lib.explode_2 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.ship[32])
            .setTransform(-116, -120);
        this.addChild(instance1);
    });

    lib.explode_3 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.ship[33])
            .setTransform(-174.95, -117);
        this.addChild(instance1);
    });

    lib.explode_4 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.ship[34])
            .setTransform(-237.95, -113);
        this.addChild(instance1);
    });

    lib.explode_5 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.ship[35])
            .setTransform(-45, -176);
        this.addChild(instance1);
    });

    lib.explode_6 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.ship[36])
            .setTransform(-107, -174);
        this.addChild(instance1);
    });

    lib.explode_7 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.ship[37])
            .setTransform(-172.95, -171);
        this.addChild(instance1);
    });

    lib.explode_8 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.ship[38])
            .setTransform(-232.95, -171);
        this.addChild(instance1);
    });

    lib.explode_9 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.ship[39])
            .setTransform(-38, -233.95);
        this.addChild(instance1);
    });

    lib.explode_10 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.ship[40])
            .setTransform(-102, -233.95);
        this.addChild(instance1);
    });

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 32, loop: false });
        var instance1 = new lib.explode_1();
        var instance2 = new lib.explode_2();
        var instance3 = new lib.explode_3();
        var instance4 = new lib.explode_4();
        var instance5 = new lib.explode_5();
        var instance6 = new lib.explode_6();
        var instance7 = new lib.explode_7();
        var instance8 = new lib.explode_8();
        var instance9 = new lib.explode_9();
        var instance10 = new lib.explode_10();
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -13.05,
                    y: -14.5
                }
            })
            .addTimedChild(instance2, 1, 1, {
                "1": {
                    x: -14.05,
                    y: -17
                }
            })
            .addTimedChild(instance3, 2, 1, {
                "2": {
                    x: -19.05,
                    y: -20.05
                }
            })
            .addTimedChild(instance4, 3, 1, {
                "3": {
                    x: -19.05,
                    y: -22.05
                }
            })
            .addTimedChild(instance5, 4, 1, {
                "4": {
                    x: -19.05,
                    y: -21.95
                }
            })
            .addTimedChild(instance6, 5, 1, {
                "5": {
                    x: -20,
                    y: -25.05
                }
            })
            .addTimedChild(instance7, 6, 1, {
                "6": {
                    x: -18.55,
                    y: -26.55
                }
            })
            .addTimedChild(instance8, 7, 1, {
                "7": {
                    x: -23.55,
                    y: -25.55
                }
            })
            .addTimedChild(instance9, 8, 1, {
                "8": {
                    x: -25.05,
                    y: -26.05
                }
            })
            .addTimedChild(instance10, 9, 23, {
                "9": {
                    x: -25,
                    y: -26.05,
                    a: 1
                },
                "10": {
                    a: 0.75
                },
                "11": {
                    a: 0.5
                },
                "12": {
                    a: 0.25
                },
                "13": {
                    a: 0
                }
            });
    });

    lib.Ship_anim = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 60,
            labels: {
                idle: 0,
                shoot: 10,
                hit: 17,
                hit_over: 21,
                over: 28
            }
        });
        var instance2 = new lib.Ship_pods();
        var instance1 = new lib.Ship_body();
        var instance3 = new Graphic1(MovieClip.SYNCHED)
            .setTransform(15.3, 25.4, 3.774, 3.773);
        this.addTimedChild(instance2, 0, 28, {
                "0": {
                    x: -28.3,
                    y: -53.4,
                    sx: 1.419,
                    sy: 1.419
                },
                "10": {
                    y: -23.65
                },
                "11": {
                    y: -91.7
                },
                "12": {
                    y: -84
                },
                "13": {
                    y: -76.35
                },
                "14": {
                    y: -68.7
                },
                "15": {
                    y: -61.05
                },
                "16": {
                    y: -53.4
                },
                "17": {
                    y: -66.4
                },
                "18": {
                    y: -39.4
                },
                "19": {
                    x: -42.3,
                    y: -59.4
                },
                "20": {
                    x: -18.3,
                    y: -39.4
                },
                "21": {
                    x: -28.3,
                    y: -53.4
                }
            })
            .addTimedChild(instance1, 0, 28, {
                "0": {
                    x: -71.85,
                    y: -92.75,
                    sx: 1.419,
                    sy: 1.419
                },
                "17": {
                    y: -105.75
                },
                "18": {
                    y: -78.75
                },
                "19": {
                    x: -85.85,
                    y: -98.75
                },
                "20": {
                    x: -61.85,
                    y: -78.75
                },
                "21": {
                    x: -71.85,
                    y: -92.75
                }
            })
            .addTimedChild(instance3, 28, 32)
            .addAction(function () {
                /* gotoAndPlay("idle");
                 */
            }, 9)
            .addAction(function () {
                /* owner.doneShooting();
                gotoAndPlay("idle");*/
            }, 16)
            .addAction(function () {
                /* owner.doneShooting();
                gotoAndPlay("idle");*/
            }, 21)
            .addAction(function () {
                /* owner.die();
                stop();*/
            }, 59);
    });

    var Graphic2 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 13, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.ship[42]);
        var instance1 = new Graphics()
            .drawCommands(shapes.ship[41]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic3 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 13, loop: false });
        var instance1 = new Graphic2(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 13, {
            "0": {
                x: 0.95,
                y: 16.75,
                sx: 1,
                sy: 1.28,
                kx: 0,
                ky: 3.142
            },
            "1": {
                y: 19.75,
                sy: 1.265,
                kx: 3.142,
                ky: 0
            },
            "2": {
                x: -0.35,
                y: 23.35,
                sx: 1.102,
                sy: 1.288,
                ky: 3.142
            },
            "3": {
                x: -1.45,
                y: 22.1,
                kx: 0,
                ky: 0
            },
            "4": {
                x: 0.95,
                y: 16.75,
                sx: 1,
                sy: 1.28,
                ky: 3.142
            },
            "5": {
                x: -1.45,
                y: 22.1,
                sx: 1.102,
                sy: 1.288,
                ky: 0
            },
            "6": {
                x: 0.95,
                y: 16.75,
                sx: 1,
                sy: 1.28,
                ky: 3.142
            },
            "7": {
                y: 19.75,
                sy: 1.265,
                kx: 3.142,
                ky: 0
            },
            "8": {
                x: -0.35,
                y: 23.35,
                sx: 1.102,
                sy: 1.288,
                ky: 3.142
            },
            "9": {
                x: -1.45,
                y: 22.1,
                kx: 0,
                ky: 0
            },
            "10": {
                x: 0.95,
                y: 16.75,
                sx: 1,
                sy: 1.28,
                ky: 3.142
            },
            "11": {
                y: 19.75,
                sy: 1.265,
                kx: 3.142,
                ky: 0
            },
            "12": {
                x: -0.35,
                y: 23.35,
                sx: 1.102,
                sy: 1.288,
                ky: 3.142
            }
        });
    });

    lib.Ship_shield_anim = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 13,
            labels: {
                on: 0,
                loop: 5
            }
        });
        var instance1 = new Graphic3(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 13, {
                "0": {
                    y: -22.05,
                    sx: 1.1,
                    sy: 1.1,
                    a: 0.12,
                    c: [
                        0.03,
                        0.94, -0.05,
                        0, -0.06,
                        0
                    ]
                },
                "1": {
                    a: 0.22,
                    c: [
                        0.01,
                        0.94, -0.14,
                        0, -0.16,
                        0
                    ]
                },
                "2": {
                    a: 0.31,
                    c: [-0.01,
                        0.94, -0.23,
                        0, -0.25,
                        0
                    ]
                },
                "3": {
                    a: 0.41,
                    c: [-0.04,
                        0.94, -0.33,
                        0, -0.36,
                        0
                    ]
                },
                "4": {
                    a: 0.5,
                    c: [-0.05,
                        0.94, -0.42,
                        0, -0.45,
                        0
                    ]
                },
                "5": {
                    a: 0.6,
                    c: [-0.08,
                        0.94, -0.51,
                        0, -0.55,
                        0
                    ]
                }
            })
            .addAction(function () {
                /* gotoAndPlay("loop");
                 */
            }, 12);
    });

    var Graphic4 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 12, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.ship[43]);
        this.addTimedChild(instance1);
    });

    var Graphic5 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 12, loop: false });
        var instance1 = new Graphic4(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 12, {
            "0": {
                x: -0.05,
                y: -0.05,
                sx: 1,
                sy: 1,
                ky: 0
            },
            "1": {
                x: 0.95,
                ky: 3.142
            },
            "2": {
                y: 0.95,
                sx: 0.871,
                sy: 1.18,
                ky: 0
            },
            "3": {
                sx: 0.957,
                sy: 1.128,
                ky: 3.142
            },
            "4": {
                y: -0.05,
                sx: 1,
                sy: 1
            },
            "5": {
                y: 0.95,
                sx: 0.871,
                sy: 1.18,
                ky: 0
            },
            "6": {
                sx: 0.957,
                sy: 1.128,
                ky: 3.142
            },
            "7": {
                x: -0.05,
                y: -0.05,
                sx: 1,
                sy: 1,
                ky: 0
            },
            "8": {
                x: 0.95,
                ky: 3.142
            },
            "9": {
                y: 0.95,
                sx: 0.871,
                sy: 1.18,
                ky: 0
            },
            "10": {
                sx: 0.957,
                sy: 1.128,
                ky: 3.142
            },
            "11": {
                x: -0.05,
                y: -0.05,
                sx: 1,
                sy: 1,
                ky: 0
            }
        });
    });

    var Graphic6 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 12, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.ship[43]);
        this.addTimedChild(instance1);
    });

    var Graphic7 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 12, loop: false });
        var instance1 = new Graphic6(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 12, {
            "0": {
                x: -0.05,
                y: -0.05,
                sx: 1,
                sy: 1,
                ky: 0
            },
            "1": {
                x: 0.95,
                ky: 3.142
            },
            "2": {
                y: 0.95,
                sx: 0.871,
                sy: 1.18,
                ky: 0
            },
            "3": {
                sx: 0.957,
                sy: 1.128,
                ky: 3.142
            },
            "4": {
                y: -0.05,
                sx: 1,
                sy: 1
            },
            "5": {
                y: 0.95,
                sx: 0.871,
                sy: 1.18,
                ky: 0
            },
            "6": {
                sx: 0.957,
                sy: 1.128,
                ky: 3.142
            },
            "7": {
                x: -0.05,
                y: -0.05,
                sx: 1,
                sy: 1,
                ky: 0
            },
            "8": {
                x: 0.95,
                ky: 3.142
            },
            "9": {
                y: 0.95,
                sx: 0.871,
                sy: 1.18,
                ky: 0
            },
            "10": {
                sx: 0.957,
                sy: 1.128,
                ky: 3.142
            },
            "11": {
                x: -0.05,
                y: -0.05,
                sx: 1,
                sy: 1,
                ky: 0
            }
        });
    });

    lib.Ship_thrust_anim = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 13,
            labels: {
                on: 0,
                loop: 5
            }
        });
        var instance2 = new Graphic7(MovieClip.SYNCHED);
        var instance1 = new Graphic5(MovieClip.SYNCHED);
        this.addTimedChild(instance2, 0, 12, {
                "0": {
                    x: 3.2,
                    y: 67.95,
                    sx: 0.764,
                    sy: 0.745,
                    c: [
                        0.48,
                        0.52,
                        0.48,
                        0.52,
                        0.48,
                        0.52
                    ]
                },
                "1": {
                    x: 2.947,
                    y: 75.176,
                    sx: 0.823,
                    sy: 0.808
                },
                "2": {
                    x: 2.695,
                    y: 82.352,
                    sx: 0.882,
                    sy: 0.872
                },
                "3": {
                    x: 2.442,
                    y: 89.528,
                    sx: 0.941,
                    sy: 0.936
                },
                "4": {
                    x: 2.2,
                    y: 96.7,
                    sx: 1,
                    sy: 1
                }
            })
            .addTimedChild(instance1, 0, 12, {
                "0": {
                    x: 3.4,
                    y: 73,
                    sx: 0.687,
                    sy: 0.67,
                    c: [
                        0.48,
                        0.52,
                        0.48,
                        0.52,
                        0.48,
                        0.52
                    ]
                },
                "1": {
                    x: 3.213,
                    y: 78.81,
                    sx: 0.741,
                    sy: 0.728,
                    c: [
                        0.61,
                        0.39,
                        0.61,
                        0.39,
                        0.61,
                        0.39
                    ]
                },
                "2": {
                    x: 2.926,
                    y: 84.668,
                    sx: 0.794,
                    sy: 0.785,
                    c: [
                        0.74,
                        0.26,
                        0.74,
                        0.26,
                        0.74,
                        0.26
                    ]
                },
                "3": {
                    x: 2.739,
                    y: 90.527,
                    sx: 0.847,
                    sy: 0.843,
                    c: [
                        0.87,
                        0.13,
                        0.87,
                        0.13,
                        0.87,
                        0.13
                    ]
                },
                "4": {
                    x: 2.5,
                    y: 96.4,
                    sx: 0.9,
                    sy: 0.9,
                    c: [
                        1,
                        0,
                        1,
                        0,
                        1,
                        0
                    ]
                }
            })
            .addAction(function () {
                /* gotoAndPlay("loop");
                 */
            }, 12);
    });

    lib.hit_target = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.ship[44]);
        this.addChild(instance1);
    });

    lib.Ship = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 33
        });
        var instance4 = this.hit_target = new lib.hit_target()
            .setTransform(0, 0, 0.8, 0.8);
        var instance3 = this.ship_thrust = new lib.Ship_thrust_anim();
        var instance2 = this.ship_shield = new lib.Ship_shield_anim();
        var instance1 = this.ship_anim = new lib.Ship_anim();
        this.addTimedChild(instance4)
            .addTimedChild(instance3, 0, 33, {
                "0": {
                    sx: 0.158,
                    sy: 0.3,
                    kx: 0,
                    ky: 0,
                    r: 0,
                    a: 0.5
                },
                "1": {
                    r: 0.196
                },
                "2": {
                    r: 0.393
                },
                "3": {
                    r: 0.589
                },
                "4": {
                    r: 0.785
                },
                "5": {
                    r: 0.982
                },
                "6": {
                    r: 1.178
                },
                "7": {
                    r: 1.374
                },
                "8": {
                    r: 1.571
                },
                "9": {
                    kx: 4.516,
                    ky: 1.767,
                    r: 0
                },
                "10": {
                    kx: 4.32,
                    ky: 1.964
                },
                "11": {
                    kx: 4.123,
                    ky: 2.16
                },
                "12": {
                    kx: 3.927,
                    ky: 2.356
                },
                "13": {
                    kx: 3.731,
                    ky: 2.553
                },
                "14": {
                    kx: 3.534,
                    ky: 2.749
                },
                "15": {
                    kx: 3.338,
                    ky: 2.945
                },
                "16": {
                    kx: 3.142,
                    ky: 3.142
                },
                "17": {
                    kx: 0,
                    ky: 0,
                    r: -2.945
                },
                "18": {
                    r: -2.749
                },
                "19": {
                    r: -2.553
                },
                "20": {
                    r: -2.356
                },
                "21": {
                    r: -2.16
                },
                "22": {
                    r: -1.964
                },
                "23": {
                    r: -1.767
                },
                "24": {
                    r: -1.571
                },
                "25": {
                    r: -1.374
                },
                "26": {
                    r: -1.178
                },
                "27": {
                    r: -0.982
                },
                "28": {
                    r: -0.785
                },
                "29": {
                    r: -0.589
                },
                "30": {
                    r: -0.393
                },
                "31": {
                    r: -0.196
                },
                "32": {
                    r: 0
                }
            })
            .addTimedChild(instance2, 0, 33, {
                "0": {
                    x: 0,
                    y: -0.05,
                    sx: 0.32,
                    sy: 0.32,
                    kx: 0,
                    ky: 0,
                    r: 0
                },
                "1": {
                    x: 0.01,
                    y: -0.049,
                    r: 0.196
                },
                "2": {
                    x: 0.019,
                    y: -0.046,
                    r: 0.393
                },
                "3": {
                    x: -0.022,
                    y: -0.042,
                    r: 0.589
                },
                "4": {
                    x: -0.015,
                    y: -0.035,
                    r: 0.785
                },
                "5": {
                    x: -0.008,
                    y: -0.028,
                    r: 0.982
                },
                "6": {
                    x: -0.004,
                    y: -0.069,
                    r: 1.178
                },
                "7": {
                    x: -0.001,
                    y: -0.06,
                    r: 1.374
                },
                "8": {
                    x: 0,
                    y: -0.05,
                    r: 1.571
                },
                "9": {
                    x: -0.001,
                    y: -0.04,
                    kx: 4.516,
                    ky: 1.767,
                    r: 0
                },
                "10": {
                    x: -0.004,
                    y: -0.031,
                    kx: 4.32,
                    ky: 1.964
                },
                "11": {
                    x: -0.008,
                    y: -0.072,
                    kx: 4.123,
                    ky: 2.16
                },
                "12": {
                    x: -0.015,
                    y: -0.065,
                    sx: 0.319,
                    kx: 3.927,
                    ky: 2.356
                },
                "13": {
                    x: -0.022,
                    y: -0.058,
                    kx: 3.731,
                    ky: 2.553
                },
                "14": {
                    x: 0.019,
                    y: -0.054,
                    kx: 3.534,
                    ky: 2.749
                },
                "15": {
                    x: 0.01,
                    y: -0.051,
                    kx: 3.338,
                    ky: 2.945
                },
                "16": {
                    x: 0,
                    y: 0,
                    kx: 3.142,
                    ky: 3.142
                },
                "17": {
                    x: -0.01,
                    y: -0.001,
                    kx: 0,
                    ky: 0,
                    r: -2.945
                },
                "18": {
                    x: -0.019,
                    y: -0.004,
                    r: -2.749
                },
                "19": {
                    x: 0.022,
                    y: -0.008,
                    r: -2.553
                },
                "20": {
                    x: 0.015,
                    y: -0.015,
                    r: -2.356
                },
                "21": {
                    x: 0.008,
                    y: -0.022,
                    r: -2.16
                },
                "22": {
                    x: 0.004,
                    y: 0.019,
                    r: -1.964
                },
                "23": {
                    x: 0.001,
                    y: 0.01,
                    r: -1.767
                },
                "24": {
                    x: 0,
                    y: 0,
                    r: -1.571
                },
                "25": {
                    x: 0.001,
                    y: -0.01,
                    r: -1.374
                },
                "26": {
                    x: 0.004,
                    y: -0.019,
                    r: -1.178
                },
                "27": {
                    x: 0.008,
                    y: 0.022,
                    r: -0.982
                },
                "28": {
                    x: 0.015,
                    y: 0.015,
                    r: -0.785
                },
                "29": {
                    x: 0.022,
                    y: 0.008,
                    r: -0.589
                },
                "30": {
                    x: -0.019,
                    y: 0.004,
                    r: -0.393
                },
                "31": {
                    x: -0.01,
                    y: 0.001,
                    r: -0.196
                },
                "32": {
                    x: 0,
                    y: 0,
                    r: 0
                }
            })
            .addTimedChild(instance1, 0, 33, {
                "0": {
                    sx: 0.301,
                    sy: 0.3,
                    kx: 0,
                    ky: 0,
                    r: 0
                },
                "1": {
                    r: 0.196
                },
                "2": {
                    r: 0.393
                },
                "3": {
                    r: 0.589
                },
                "4": {
                    r: 0.785
                },
                "5": {
                    r: 0.982
                },
                "6": {
                    r: 1.178
                },
                "7": {
                    r: 1.374
                },
                "8": {
                    r: 1.571
                },
                "9": {
                    kx: 4.516,
                    ky: 1.767,
                    r: 0
                },
                "10": {
                    kx: 4.32,
                    ky: 1.964
                },
                "11": {
                    kx: 4.123,
                    ky: 2.16
                },
                "12": {
                    kx: 3.927,
                    ky: 2.356
                },
                "13": {
                    kx: 3.731,
                    ky: 2.553
                },
                "14": {
                    kx: 3.534,
                    ky: 2.749
                },
                "15": {
                    kx: 3.338,
                    ky: 2.945
                },
                "16": {
                    kx: 3.142,
                    ky: 3.142
                },
                "17": {
                    kx: 0,
                    ky: 0,
                    r: -2.945
                },
                "18": {
                    r: -2.749
                },
                "19": {
                    r: -2.553
                },
                "20": {
                    r: -2.356
                },
                "21": {
                    r: -2.16
                },
                "22": {
                    r: -1.964
                },
                "23": {
                    r: -1.767
                },
                "24": {
                    r: -1.571
                },
                "25": {
                    r: -1.374
                },
                "26": {
                    r: -1.178
                },
                "27": {
                    r: -0.982
                },
                "28": {
                    r: -0.785
                },
                "29": {
                    r: -0.589
                },
                "30": {
                    r: -0.393
                },
                "31": {
                    r: -0.196
                },
                "32": {
                    r: 0
                }
            });
    });

    lib.ship = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 30
        });
        var instance1 = this.ship = new lib.Ship()
            .setTransform(399.8, 298.2);
        this.addChild(instance1);
    });

    lib.ship.assets = {
        "ship": "images/ship.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.ship,
        background: 0x0,
        width: 800,
        height: 600,
        framerate: 30,
        totalFrames: 1,
        library: lib
    };
}