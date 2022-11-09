//grid of 4 rows
var row0 = [];
var row1 = [];
var row2 = [];
var row3 = [];

class Board extends React.Component {
   state = {
      player: 0, x: 0, y: 0, dot1: [0, 0], dot2: [0, 0], dotsClicked: 0,
      player1box: 0,
      player2box: 0,
      player3box: 0,
      generateBoard: true
   };

   checkFromRight = (j, k) => {
      var boxMade = false;
      var lines = 2;
      var upId = j + " " + k + " " + (k + 1);
      var topLine = document.getElementById(upId);
      if (topLine != null && topLine.className != "acrossPer") {
         lines++;
      }
      var botId = (j + 1) + " " + k + " " + (k + 1);
      var botLine = document.getElementById(botId);
      if (botLine != null && botLine.className != "acrossPer") {
         lines++;
      }
      if (lines == 4) {
         boxMade = true;
         var boxId = j + " " + k;

         if (this.state.player % 3 == 0) {
            document.getElementById(boxId).className = "boxPlay1";
            this.setState({ player1box: this.state.player1box + 1 });
         }
         else if (this.state.player % 3 == 1) {
            document.getElementById(boxId).className = "boxPlay2";
            this.setState({ player2box: this.state.player2box + 1 });
         }
         else {
            document.getElementById(boxId).className = "boxPlay3";
            this.setState({ player3box: this.state.player3box + 1 });
         }
      }
      return boxMade;
   }

   checkFromLeft = (j, k) => {
      var boxMade = false;
      var lines = 2;
      var upId = j + " " + (k - 1) + " " + k;
      var topLine = document.getElementById(upId);
      if (topLine != null && topLine.className != "acrossPer") {
         lines++;
      }
      var botId = (j + 1) + " " + (k - 1) + " " + k;
      var botLine = document.getElementById(botId);
      if (botLine != null && botLine.className != "acrossPer") {
         lines++;
      }
      if (lines == 4) {
         boxMade = true;
         var boxId = j + " " + (k - 1);

         if (this.state.player % 3 == 0) {
            document.getElementById(boxId).className = "boxPlay1";
            this.setState({ player1box: this.state.player1box + 1 });
         }
         else if (this.state.player % 3 == 1) {
            document.getElementById(boxId).className = "boxPlay2";
            this.setState({ player2box: this.state.player2box + 1 });
         }
         else {
            document.getElementById(boxId).className = "boxPlay3";
            this.setState({ player3box: this.state.player3box + 1 });
         }
      }
      return boxMade;
   }


   checkFromAbove = (j, k) => {
      var lines = 2;
      var boxMade = false;
      var tLeftId = (j - 1) + " " + j + " " + (k - 1) + " v";
      var tRightId = (j - 1) + " " + j + " " + k + " v";
      var tLeftLine = document.getElementById(tLeftId);
      var tRightLine = document.getElementById(tRightId);

      if (tLeftLine != null && tLeftLine.className != "downPer") {
         lines++;
      }
      if (tRightLine != null && tRightLine.className != "downPer") {
         lines++;
      }
      //box of resp player
      if (lines == 4) {
         boxMade = true;
         var boxId = (j - 1) + " " + (k - 1);

         if (this.state.player % 3 == 0) {
            document.getElementById(boxId).className = "boxPlay1";
            this.setState({ player1box: this.state.player1box + 1 });
         }
         else if (this.state.player % 3 == 1) {
            document.getElementById(boxId).className = "boxPlay2";
            this.setState({ player2box: this.state.player2box + 1 });
         }
         else {
            document.getElementById(boxId).className = "boxPlay3";
            this.setState({ player3box: this.state.player3box + 1 });
         }
      }
      return boxMade;
   }

   checkFromBelow = (j, k) => {
      var lines = 2;
      var boxMade = false;
      var bLeftId = j + " " + (j + 1) + " " + (k - 1) + " v";
      var bRightId = j + " " + (j + 1) + " " + k + " v";
      var bLeftLine = document.getElementById(bLeftId);
      var bRightLine = document.getElementById(bRightId);

      if (bLeftLine != null && bLeftLine.className != "downPer") {
         lines++;
      }
      if (bRightLine != null && bRightLine.className != "downPer") {
         lines++;
      }

      //box of the resp player
      if (lines == 4) {
         boxMade = true;
         var boxId = j + " " + (k - 1);

         if (this.state.player % 3 == 0) {
            document.getElementById(boxId).className = "boxPlay1";
            this.setState({ player1box: this.state.player1box + 1 });
         }
         else if (this.state.player % 3 == 1) {
            document.getElementById(boxId).className = "boxPlay2";
            this.setState({ player2box: this.state.player2box + 1 });
         }
         else {
            document.getElementById(boxId).className = "boxPlay3";
            this.setState({ player3box: this.state.player3box + 1 });
         }

      }
      return boxMade;
   }

   updateHorizontalLines = (row, id) => {
      if (this.state.player % 3 == 0) {
         document.getElementById(id).className = "acrossPlay1";
      }
      else if (this.state.player % 3 == 1) {
         document.getElementById(id).className = "acrossPlay2";
      }
      else {
         document.getElementById(id).className = "acrossPlay3";
      }
   }

   updateVerticalLines = (row, id) => {
      if (this.state.player % 3 == 0) {
         document.getElementById(id).className = "downPlay1";
      }
      else if (this.state.player % 3 == 1) {
         document.getElementById(id).className = "downPlay2";
      }
      else {
         document.getElementById(id).className = "downPlay3";
      }
   }


   handleDotClick = (e) => {
      // if dots not clicked
      if (this.state.dotsClicked == 0) {
         this.setState({ dotsClicked: 1 });
         this.setState({ dot1: [e.target.attributes.x.nodeValue, e.target.attributes.y.nodeValue] });
         e.target.className = "dot-white";
         e.target.id = "selected";
      }
      //if dots clicked
      else if (this.state.dotsClicked == 1) {
         if (e.target.className == "dot-white") {
            this.setState({ dotsClicked: 0 });
            e.target.id = "";
            e.target.className = "dot";
         }
         //checking moves
         var h, v, legalMove = false;
         var y1 = parseInt(this.state.dot1[1], 10);
         var y2 = parseInt(e.target.attributes.y.nodeValue, 10);
         var x1 = parseInt(this.state.dot1[0], 10);
         var x2 = parseInt(e.target.attributes.x.nodeValue, 10);
         var lineId = "";

         if (y1 == (y2 + 1) || y1 == (y2 - 1)) {
            if (x1 == x2) {
               h = true;
            }
         }

         if (x1 == (x2 + 1) || x1 == (x2 - 1)) {
            if (y1 == y2) {
               v = true;
            }

         }

         if (h == true) {
            var row = this.state.dot1[0];
            if (y1 > y2) {
               var tmp = y1;
               y1 = y2;
               y2 = tmp;
            }
            y1 = y1.toString();
            y2 = y2.toString();
            var id = row + " " + y1 + " " + y2;
            lineId = id;
            var line = document.getElementById(id);
            if (line.className == "acrossPer") {
               legalMove = true;
            }

            if (legalMove) {
               this.updateHorizontalLines(row, id);
            }
         }

         if (v == true) {
            var index = e.target.attributes.y.nodeValue;
            if (x1 > x2) {
               var tmp = x1;
               x1 = x2;
               x2 = tmp;
            }
            x1 = x1.toString();
            x2 = x2.toString();
            var id = x1 + " " + x2 + " " + index + " v";
            lineId = id;
            var line = document.getElementById(id);
            if (line.className == "downPer") {
               legalMove = true;
            }
            var row = x2;

            if (legalMove) {
               this.updateVerticalLines(row, id);
            }
         }

         //if the box made by the player
         if (legalMove) {
            var boxMade = false;
            var id = lineId;
            lineId = lineId.split(" ");
            var a = lineId[0];
            var b = lineId[1];
            var c = lineId[2];
            var d = lineId[3];

            var i = parseInt(c, 10);
            var j = parseInt(a, 10);
            var rightId = a + " " + b + " " + (i + 1) + " v";
            var leftId = a + " " + b + " " + (i - 1) + " v";
            var topId = (j - 1) + " " + b + " " + c;
            var belowId = (j + 1) + " " + b + " " + c;
            var rightLine = document.getElementById(rightId);
            var leftLine = document.getElementById(leftId);
            var aboveLine = document.getElementById(topId);
            var belowLine = document.getElementById(belowId);

            if (id.includes("v")) {
               var j = parseInt(a, 10);
               var k = parseInt(c, 10);
               var rightBox = false;
               var leftBox = false;

               if ((rightLine != null && rightLine.className != "downPer") && (leftLine == null || leftLine.className == "downPer")) {
                  rightBox = this.checkFromRight(j, k);
               }

               else if ((leftLine != null && leftLine.className != "downPer") && (rightLine == null || rightLine.className == "downPer")) {
                  leftBox = this.checkFromLeft(j, k);
               }

               else if (leftLine != null && rightLine != null && leftLine.className != "downPer" && rightLine.className != "downPer") {
                  rightBox = this.checkFromRight(j, k);
                  leftBox = this.checkFromLeft(j, k);
               }

               // no rectangles check (vertical)
               if (leftBox && rightBox) {
                  if (this.state.player % 3 == 0) {
                     this.setState({ player1box: this.state.player1box + 2 })
                  }
                  else if (this.state.player % 3 == 1) {
                     this.setState({ player2box: this.state.player2box + 2 })
                  }
                  else {
                     this.setState({ player3box: this.state.player3box + 2 })
                  }
               }
            }
            else {
               var j = parseInt(a, 10);
               var k = parseInt(c, 10);
               var topBox = false;
               var botBox = false;

               if ((aboveLine != null && aboveLine.className != "acrossPer") && (belowLine == null || belowLine.className == "acrossPer")) {
                  topBox = this.checkFromAbove(j, k);
               }
               else if ((belowLine != null && belowLine.className != "acrossPer") && (aboveLine == null || aboveLine.className == "acrossPer")) {
                  botBox = this.checkFromBelow(j, k);
               }
               else if (aboveLine != null && belowLine != null && aboveLine.className != "acrossPer" && belowLine.className != "acrossPer") {
                  topBox = this.checkFromAbove(j, k);
                  botBox = this.checkFromBelow(j, k);
               }

               // no rectangles check (across)
               if (topBox && botBox) {
                  if (this.state.player % 3 == 0) {
                     this.setState({ player1box: this.state.player1box + 2 })
                  }
                  else if (this.state.player % 3 == 1) {
                     this.setState({ player2box: this.state.player2box + 2 })
                  }
                  else {
                     this.setState({ player3box: this.state.player3box + 2 })
                  }
               }
            }

            if (h && !(topBox || botBox)) {
               var startId = id;
               var boxesMade = 0;
               var j1 = j;
               var k1 = k;
               var case3 = true;

               var endId1Buffer = (j + 1) + " " + b + " " + c;
               var endLine1Buffer = document.getElementById(endId1Buffer);
               var rectangle = true;
               if (endLine1Buffer != null && endLine1Buffer.className == "acrossPer") {
                  while (endLine1Buffer != null && endLine1Buffer.className == "acrossPer" && rectangle) {
                     var endId1Buffer = (j + 1) + " " + b + " " + c;
                     var endLine1Buffer = document.getElementById(endId1Buffer);
                     var tLeftId = j + " " + (j + 1) + " " + (k - 1) + " v";
                     var tRightId = j + " " + (j + 1) + " " + k + " v";
                     var tLeftLine = document.getElementById(tLeftId);
                     var tRightLine = document.getElementById(tRightId);
                     if (tLeftLine == null || tLeftLine.className == "downPer" || tRightLine == null || tRightLine.className == "downPer") {
                        rectangle = false;
                     }
                     j++;
                  }
                  if (rectangle) {
                     case3 = false;
                     var start = startId.split(" ");
                     var n = parseInt(start[0], 10);
                     var m = parseInt(start[1], 10);
                     for (n; n < j; n++) {
                        if (this.state.player % 3 == 0) {
                           var boxId = n + " " + m;
                           var box = document.getElementById(boxId);
                           if (box.className == "square") {
                              document.getElementById(n + " " + m).className = "boxPlay1";
                              document.getElementById(n + " " + m + " " + (m + 1)).className = "acrossPlay1";
                              boxesMade++;
                              this.setState({ player1box: this.state.player1box + boxesMade });
                           }
                        }
                        else if (this.state.player % 3 == 1) {
                           var boxId = n + " " + m;
                           var box = document.getElementById(boxId);
                           if (box.className == "square") {
                              document.getElementById(n + " " + m).className = "boxPlay2";
                              document.getElementById(n + " " + m + " " + (m + 1)).className = "acrossPlay2";
                              boxesMade++;
                              this.setState({ player2box: this.state.player2box + boxesMade });
                           }
                        }
                        else {
                           var boxId = n + " " + m;
                           var box = document.getElementById(boxId);
                           if (box.className == "square") {
                              document.getElementById(n + " " + m).className = "boxPlay3";
                              document.getElementById(n + " " + m + " " + (m + 1)).className = "acrossPlay3";
                              boxesMade++;
                              this.setState({ player3box: this.state.player3box + boxesMade });
                           }
                        }
                     }

                     this.setState({ player: this.state.player++ })
                  }
               }

               //across condition check
               endId1Buffer = (j - 1) + " " + b + " " + c;
               endLine1Buffer = document.getElementById(endId1Buffer);
               rectangle = true;
               j = j1;
               if (endLine1Buffer != null && endLine1Buffer.className == "acrossPer") {
                  while (endLine1Buffer != null && endLine1Buffer.className == "acrossPer" && rectangle) {
                     var endId1Buffer = (j - 1) + " " + b + " " + c;
                     var endLine1Buffer = document.getElementById(endId1Buffer);
                     var tLeftId = (j - 1) + " " + j + " " + (k - 1) + " v";
                     var tRightId = (j - 1) + " " + j + " " + k + " v";
                     var tLeftLine = document.getElementById(tLeftId);
                     var tRightLine = document.getElementById(tRightId);
                     if (tLeftLine == null || tLeftLine.className == "downPer" || tRightLine == null || tRightLine.className == "downPer") {
                        rectangle = false;
                     }
                     j--;
                  }
                  if (rectangle) {
                     case3 = false;
                     var start = startId.split(" ");
                     var n = parseInt(start[0], 10);
                     var m = parseInt(start[1], 10);
                     for (n = n - 1; n >= j; n--) {
                        if (this.state.player % 3 == 0) {
                           var boxId = n + " " + m;
                           var box = document.getElementById(boxId);
                           if (box.className == "square") {
                              document.getElementById(n + " " + m).className = "boxPlay1";
                              document.getElementById(n + " " + m + " " + (m + 1)).className = "acrossPlay1";
                              boxesMade++;
                              this.setState({ player1box: this.state.player1box + boxesMade });
                           }
                        }
                        else if (this.state.player % 3 == 1) {
                           var boxId = n + " " + m;
                           var box = document.getElementById(boxId);
                           if (box.className == "square") {
                              document.getElementById(n + " " + m).className = "boxPlay2";
                              document.getElementById(n + " " + m + " " + (m + 1)).className = "acrossPlay2";
                              boxesMade++;
                              this.setState({ player2box: this.state.player2box + boxesMade });
                           }
                        }
                        else {
                           var boxId = n + " " + m;
                           var box = document.getElementById(boxId);
                           if (box.className == "square") {
                              document.getElementById(n + " " + m).className = "boxPlay3";
                              document.getElementById(n + " " + m + " " + (m + 1)).className = "acrossPlay3";
                              boxesMade++;
                              this.setState({ player3box: this.state.player3box + boxesMade });
                           }
                        }
                     }
                     this.setState({ player: this.state.player++ })
                  }
               }

               if (case3) {
                  j = j1;
                  var leftEndBufferId = j + " " + (j + 1) + " " + (k - 1) + " v";
                  var rightEndBufferId = j + " " + (j + 1) + " " + k + " v";
                  var oppositeLineId = (j + 1) + " " + b + " " + c;
                  var currentLineId = id;
                  var leftRectangleCheck = true;
                  var rightRectangleCheck = true;
                  var checkVerticalUp = false;

                  var leftEndBuffer = document.getElementById(leftEndBufferId);
                  var rightEndBuffer = document.getElementById(rightEndBufferId);
                  var oppositeLine = document.getElementById(oppositeLineId);
                  var currentLine = document.getElementById(currentLineId);

                  if (oppositeLine == null || oppositeLine.className == "acrossPer") {
                     checkVerticalUp = true;
                     leftEndBufferId = (j - 1) + " " + j + " " + (k - 1) + " v";
                     rightEndBufferId = (j - 1) + " " + j + " " + k + " v";
                     oppositeLineId = (j - 1) + " " + b + " " + c;
                     leftEndBuffer = document.getElementById(leftEndBufferId);
                     rightEndBuffer = document.getElementById(rightEndBufferId);
                     oppositeLine = document.getElementById(oppositeLineId);
                  }

                  if (checkVerticalUp) {
                     var n = parseInt(b, 10);
                     var m = parseInt(c, 10);
                     var n1 = n;
                     var m1 = m;

                     if (oppositeLine != null && oppositeLine.className != "acrossPer") {
                        while (oppositeLine != null && oppositeLine.className != "acrossPer" &&
                           currentLine != null && currentLine.className != "acrossPer" &&
                           leftEndBuffer != null && leftEndBuffer.className == "downPer") {
                           oppositeLineId = (j - 1) + " " + n + " " + m;
                           currentLineId = j + " " + n + " " + m;
                           leftEndBufferId = (j - 1) + " " + j + " " + (k - 1) + " v";
                           leftEndBuffer = document.getElementById(leftEndBufferId);
                           oppositeLine = document.getElementById(oppositeLineId);
                           currentLine = document.getElementById(currentLineId);
                           if (oppositeLine == null || oppositeLine.className == "acrossPer" || currentLine == null || currentLine.className == "acrossPer") {
                              leftRectangleCheck = false;
                           }
                           else {
                              n--;
                              m--;
                              k--;
                           }
                        }

                        k = k1;
                        j = j1;
                        n = n1;
                        m = m1;
                        while (oppositeLine != null && oppositeLine.className != "acrossPer" &&
                           currentLine != null && currentLine.className != "acrossPer" &&
                           rightEndBuffer != null && rightEndBuffer.className == "downPer") {
                           oppositeLineId = (j - 1) + " " + n + " " + m;
                           currentLineId = j + " " + n + " " + m;
                           rightEndBufferId = (j - 1) + " " + j + " " + k + " v";
                           rightEndBuffer = document.getElementById(rightEndBufferId);
                           oppositeLine = document.getElementById(oppositeLineId);
                           currentLine = document.getElementById(currentLineId);
                           if (oppositeLine == null || oppositeLine.className == "acrossPer" || currentLine == null || currentLine.className == "acrossPer") {
                              rightRectangleCheck = false;
                           }
                           else {
                              n++;
                              m++;
                              k++;
                           }
                        }
                     }

                     var leftRectangle = false;
                     var rightRectangle = false;

                     if (leftEndBuffer != null && leftEndBuffer.className != "downPer" && leftRectangleCheck) {
                        leftRectangle = true;
                     }
                     else {
                        leftRectangle = false;
                     }
                     if (rightEndBuffer != null && rightEndBuffer.className != "downPer" && rightRectangleCheck) {
                        rightRectangle = true;
                     }
                     else {
                        rightRectangle = false;
                     }

                     if (leftRectangle && rightRectangle) {
                        var startId = leftEndBufferId.split(" ");
                        var i = parseInt(startId[2], 10);
                        var endId = rightEndBufferId.split(" ");
                        var j = parseInt(endId[2], 10);
                        var boxesMade = 0;
                        if (this.state.player % 3 == 0) {
                           for (i; i < j; i++) {
                              var boxId = startId[0] + " " + i;
                              var box = document.getElementById(boxId);
                              if (box.className == "square") {
                                 document.getElementById(boxId).className = "boxPlay1";
                                 var line = startId[0] + " " + startId[1] + " " + i + " v";
                                 boxesMade++;
                                 document.getElementById(line).className = "downPlay1";
                              }
                           }
                           this.setState({ player1box: this.state.player1box + boxesMade })
                        }
                        else if (this.state.player % 3 == 1) {
                           for (i; i < j; i++) {
                              var boxId = startId[0] + " " + i;
                              var box = document.getElementById(boxId);
                              if (box.className == "square") {
                                 document.getElementById(boxId).className = "boxPlay2";
                                 var line = startId[0] + " " + startId[1] + " " + i + " v";
                                 boxesMade++;
                                 document.getElementById(line).className = "downPlay2";
                              }
                           }
                           this.setState({ player2box: this.state.player2box + boxesMade })
                        }
                        else {
                           for (i; i < j; i++) {
                              var boxId = startId[0] + " " + i;
                              var box = document.getElementById(boxId);
                              if (box.className == "square") {
                                 document.getElementById(boxId).className = "boxPlay3";
                                 var line = startId[0] + " " + startId[1] + " " + i + " v";
                                 boxesMade++;
                                 document.getElementById(line).className = "downPlay3";
                              }
                           }
                           this.setState({ player3box: this.state.player3box + boxesMade })
                        }
                        this.setState({ player: this.state.player++ });
                     }
                  }

                  else {
                     var n = parseInt(b, 10);
                     var m = parseInt(c, 10);
                     var n1 = n;
                     var m1 = m;

                     if (oppositeLine != null && oppositeLine.className != "acrossPer") {

                        while (oppositeLine != null && oppositeLine.className != "acrossPer" &&
                           currentLine != null && currentLine.className != "acrossPer" &&
                           leftEndBuffer != null && leftEndBuffer.className == "downPer") {
                           oppositeLineId = (j + 1) + " " + n + " " + m;
                           currentLineId = j + " " + n + " " + m;
                           leftEndBufferId = j + " " + (j + 1) + " " + (k - 1) + " v";
                           leftEndBuffer = document.getElementById(leftEndBufferId);
                           oppositeLine = document.getElementById(oppositeLineId);
                           currentLine = document.getElementById(currentLineId);
                           if (oppositeLine == null || oppositeLine.className == "acrossPer" || currentLine == null || currentLine.className == "acrossPer") {
                              leftRectangleCheck = false;
                           }
                           else {
                              n--;
                              m--;
                              k--;
                           }
                        }
                        k = k1;
                        j = j1;
                        n = n1;
                        m = m1;
                        while (oppositeLine != null && oppositeLine.className != "acrossPer" &&
                           currentLine != null && currentLine.className != "acrossPer" &&
                           rightEndBuffer != null && rightEndBuffer.className == "downPer") {
                           oppositeLineId = (j + 1) + " " + n + " " + m;
                           currentLineId = j + " " + n + " " + m;
                           rightEndBufferId = j + " " + (j + 1) + " " + k + " v";
                           rightEndBuffer = document.getElementById(rightEndBufferId);
                           oppositeLine = document.getElementById(oppositeLineId);
                           currentLine = document.getElementById(currentLineId);
                           if (oppositeLine == null || oppositeLine.className == "acrossPer" || currentLine == null || currentLine.className == "acrossPer") {
                              rightRectangleCheck = false;
                           }
                           else {
                              n++;
                              m++;
                              k++;
                           }
                        }
                     }

                     var leftRectangle = false;
                     var rightRectangle = false;

                     if (leftEndBuffer != null && leftEndBuffer.className != "downPer" && leftRectangleCheck) {
                        leftRectangle = true;
                     }
                     else {
                        leftRectangle = false;
                     }
                     if (rightEndBuffer != null && rightEndBuffer.className != "downPer" && rightRectangleCheck) {
                        rightRectangle = true;
                     }
                     else {
                        rightRectangle = false;
                     }

                     if (leftRectangle && rightRectangle) {
                        var startId = leftEndBufferId.split(" ");
                        var i = parseInt(startId[2], 10);
                        var endId = rightEndBufferId.split(" ");
                        var j = parseInt(endId[2], 10);
                        var boxesMade = 0;
                        if (this.state.player % 3 == 0) {
                           for (i; i < j; i++) {
                              var boxId = startId[0] + " " + i;
                              var box = document.getElementById(boxId);
                              if (box.className == "square") {
                                 document.getElementById(boxId).className = "boxPlay1";
                                 var line = startId[0] + " " + startId[1] + " " + i + " v";
                                 boxesMade++;
                                 document.getElementById(line).className = "downPlay1";
                              }
                           }
                           this.setState({ player1box: this.state.player1box + boxesMade })
                        }
                        else if (this.state.player % 3 == 1) {
                           for (i; i < j; i++) {
                              var boxId = startId[0] + " " + i;
                              var box = document.getElementById(boxId);
                              if (box.className == "square") {
                                 document.getElementById(boxId).className = "boxPlay2";
                                 var line = startId[0] + " " + startId[1] + " " + i + " v";
                                 boxesMade++;
                                 document.getElementById(line).className = "downPlay2";
                              }
                           }
                           this.setState({ player2box: this.state.player2box + boxesMade })
                        }
                        else {
                           for (i; i < j; i++) {
                              var boxId = startId[0] + " " + i;
                              var box = document.getElementById(boxId);
                              if (box.className == "square") {
                                 document.getElementById(boxId).className = "boxPlay3";
                                 var line = startId[0] + " " + startId[1] + " " + i + " v";
                                 boxesMade++;
                                 document.getElementById(line).className = "downPlay3";
                              }
                           }
                           this.setState({ player3box: this.state.player3box + boxesMade })
                        }
                        this.setState({ player: this.state.player++ });
                     }
                  }
               }
            }

            else if (v && !(leftBox || rightBox)) {
               var startId = id;
               var boxesMade = 0;
               var j1 = j;
               var k1 = k;
               var case3 = true;

               var endId1Buffer = j + " " + b + " " + (k + 1) + " v";
               var endLine1Buffer = document.getElementById(endId1Buffer);
               var rectangle = true;
               if (endLine1Buffer != null && endLine1Buffer.className == "downPer") {
                  while (endLine1Buffer != null && endLine1Buffer.className == "downPer" && rectangle) {
                     var endId1Buffer = j + " " + b + " " + (k + 1) + " v";
                     var endLine1Buffer = document.getElementById(endId1Buffer);
                     var botRightLineId = (j + 1) + " " + k + " " + (k + 1);
                     var topRightLineId = j + " " + k + " " + (k + 1);
                     var botRightLine = document.getElementById(botRightLineId);
                     var topRightLine = document.getElementById(topRightLineId);
                     if (topRightLine == null || topRightLine.className == "acrossPer" || botRightLine == null || botRightLine.className == "acrossPer") {
                        rectangle = false;
                     }
                     k++;
                  }
                  if (rectangle) {
                     case3 = false;
                     var start = startId.split(" ");
                     var n = parseInt(start[2], 10);
                     for (n; n < k; n++) {
                        if (this.state.player % 3 == 0) {
                           var boxId = j + " " + n;
                           var box = document.getElementById(boxId);
                           if (box.className == "square") {
                              document.getElementById(j + " " + n).className = "boxPlay1";
                              document.getElementById(j + " " + (j + 1) + " " + n + " v").className = "downPlay1";
                              boxesMade++;
                           }
                           this.setState({ player1box: this.state.player1box + boxesMade })
                        }
                        else if (this.state.player % 3 == 1) {
                           var boxId = j + " " + n;
                           var box = document.getElementById(boxId);
                           if (box.className == "square") {
                              document.getElementById(j + " " + n).className = "boxPlay2";
                              document.getElementById(j + " " + (j + 1) + " " + n + " v").className = "downPlay2";
                              boxesMade++;
                           }
                           this.setState({ player2box: this.state.player2box + boxesMade })
                        }
                        else {
                           var boxId = j + " " + n;
                           var box = document.getElementById(boxId);
                           if (box.className == "square") {
                              document.getElementById(j + " " + n).className = "boxPlay3";
                              document.getElementById(j + " " + (j + 1) + " " + n + " v").className = "downPlay3";
                              boxesMade++;
                           }
                           this.setState({ player3box: this.state.player3box + boxesMade })
                        }
                     }
                     this.setState({ player: this.state.player++ });
                  }
               }
               k = k1;
               endId1Buffer = j + " " + b + " " + (k - 1) + " v";
               endLine1Buffer = document.getElementById(endId1Buffer);
               rectangle = true;
               if (endLine1Buffer != null && endLine1Buffer.className == "downPer") {
                  while (endLine1Buffer != null && endLine1Buffer.className == "downPer" && rectangle) {
                     var endId1Buffer = j + " " + b + " " + (k - 1) + " v";
                     var endLine1Buffer = document.getElementById(endId1Buffer);
                     var botLeftLineId = (j + 1) + " " + (k - 1) + " " + k;
                     var topLeftLineId = j + " " + (k - 1) + " " + k;
                     var botLeftLine = document.getElementById(botLeftLineId);
                     var topLeftLine = document.getElementById(topLeftLineId);
                     if (topLeftLine == null || topLeftLine.className == "acrossPer" || botLeftLine == null || botLeftLine.className == "acrossPer") {
                        rectangle = false;
                     }
                     k--;
                  }
                  if (rectangle) {
                     case3 = false;
                     var start = startId.split(" ");
                     var n = parseInt(start[2], 10);
                     for (n; n > k; n--) {
                        if (this.state.player % 3 == 0) {
                           var boxId = j + " " + (n - 1)
                           var box = document.getElementById(boxId);
                           if (box.className == "square") {
                              document.getElementById(boxId).className = "boxPlay1";
                              document.getElementById(j + " " + (j + 1) + " " + n + " v").className = "downPlay1";
                              boxesMade++;
                           }
                           this.setState({ player1box: this.state.player1box + boxesMade })
                        }
                        else if (this.state.player % 3 == 1) {
                           var boxId = j + " " + (n - 1)
                           var box = document.getElementById(boxId);
                           if (box.className == "square") {
                              document.getElementById(boxId).className = "boxPlay2";
                              document.getElementById(j + " " + (j + 1) + " " + n + " v").className = "downPlay2";
                              boxesMade++;
                           }
                           this.setState({ player2box: this.state.player2box + boxesMade })
                        }
                        else {
                           var boxId = j + " " + (n - 1)
                           var box = document.getElementById(boxId);
                           if (box.className == "square") {
                              document.getElementById(boxId).className = "boxPlay3";
                              document.getElementById(j + " " + (j + 1) + " " + n + " v").className = "downPlay3";
                              boxesMade++;
                           }
                           this.setState({ player3box: this.state.player3box + boxesMade })
                        }
                     }
                     this.setState({ player: this.state.player++ });
                  }
               }
               if (case3) {
                  j = j1;
                  k = k1;
                  var topEndBufferId = j + " " + k + " " + (k + 1);
                  var topEndBuffer = document.getElementById(topEndBufferId);
                  var botEndBufferId = (j + 1) + " " + k + " " + (k + 1);
                  var botEndBuffer = document.getElementById(botEndBufferId);
                  var oppositeLineId = j + " " + (j + 1) + " " + (k + 1) + " v";
                  var currentLineId = id;
                  var topRectangleCheck = true;
                  var botRectangleCheck = true;
                  var checkFromLeft = false;
                  var oppositeLine = document.getElementById(oppositeLineId);
                  var currentLine = document.getElementById(currentLineId);

                  if (oppositeLine == null || oppositeLine.className == "downPer") {
                     checkFromLeft = true;
                     topEndBufferId = j + " " + (k - 1) + " " + k;
                     botEndBufferId = (j + 1) + " " + (k - 1) + " " + k;
                     oppositeLineId = j + " " + b + " " + (k - 1) + " v";
                     topEndBuffer = document.getElementById(topEndBufferId);
                     botEndBuffer = document.getElementById(botEndBufferId);
                     oppositeLine = document.getElementById(oppositeLineId);
                  }

                  if (checkFromLeft == false) {
                     if (oppositeLine != null && oppositeLine.className != "downPer") {
                        while (oppositeLine != null && oppositeLine.className != "downPer" &&
                           currentLine != null && currentLine.className != "downPer" &&
                           botEndBuffer != null && botEndBuffer.className == "acrossPer") {
                           oppositeLineId = j + " " + (j + 1) + " " + (k + 1) + " v";
                           currentLineId = j + " " + (j + 1) + " " + k + " v";
                           botEndBufferId = (j + 1) + " " + k + " " + (k + 1);
                           botEndBuffer = document.getElementById(botEndBufferId);
                           oppositeLine = document.getElementById(oppositeLineId);
                           currentLine = document.getElementById(currentLineId);
                           if (oppositeLine == null || oppositeLine.className == "downPer" || currentLine == null || currentLine.className == "downPer") {
                              botRectangleCheck = false;
                           }
                           else {
                              j++;
                           }

                        }

                        j = j1;
                        currentLineId = j + " " + (j + 1) + " " + k + " v";
                        oppositeLineId = j + " " + (j + 1) + " " + (k + 1) + " v";
                        currentLine = document.getElementById(currentLineId);
                        oppositeLine = document.getElementById(oppositeLineId);
                        while (oppositeLine != null && oppositeLine.className != "downPer" &&
                           currentLine != null && currentLine.className != "downPer" &&
                           topEndBuffer != null && topEndBuffer.className == "acrossPer") {
                           oppositeLineId = j + " " + (j + 1) + " " + (k + 1) + " v";
                           currentLineId = j + " " + (j + 1) + " " + k + " v";
                           topEndBufferId = j + " " + k + " " + (k + 1);
                           topEndBuffer = document.getElementById(topEndBufferId);
                           oppositeLine = document.getElementById(oppositeLineId);
                           currentLine = document.getElementById(currentLineId);
                           if (oppositeLine == null || oppositeLine.className == "downPer" || currentLine == null || currentLine.className == "downPer") {
                              topRectangleCheck = false;
                           }
                           else {
                              j--;
                           }

                        }

                        if (botRectangleCheck && topRectangleCheck) {
                           var start = topEndBufferId.split(" ");
                           var i = start[0];
                           var n = start[1];
                           var m = start[2];
                           var end = botEndBufferId.split(" ");
                           var j = end[0];
                           if (this.state.player % 3 == 1) {
                              for (i; i < j; i++) {
                                 var boxId = i + " " + n;
                                 var line = i + " " + n + " " + m;
                                 var box = document.getElementById(boxId);
                                 if (box.className == "square") {
                                    document.getElementById(boxId).className = "boxPlay1";
                                    document.getElementById(line).className = "acrossPlay1";
                                    boxesMade++;
                                 }
                              }
                              this.setState({ player1box: this.state.player1box + boxesMade });
                           }
                           else if (this.state.player % 3 == 1) {
                              for (i; i < j; i++) {
                                 var boxId = i + " " + n;
                                 var line = i + " " + n + " " + m;
                                 var box = document.getElementById(boxId);
                                 if (box.className == "square") {
                                    document.getElementById(boxId).className = "boxPlay2";
                                    document.getElementById(line).className = "acrossPlay2";
                                    boxesMade++;
                                 }
                              }
                              this.setState({ player2box: this.state.player2box + boxesMade });
                           }
                           else {
                              for (i; i < j; i++) {
                                 var boxId = i + " " + n;
                                 var line = i + " " + n + " " + m;
                                 var box = document.getElementById(boxId);
                                 if (box.className == "square") {
                                    document.getElementById(boxId).className = "boxPlay3";
                                    document.getElementById(line).className = "acrossPlay3";
                                    boxesMade++;
                                 }
                              }
                              this.setState({ player3box: this.state.player3box + boxesMade });
                           }
                           this.setState({ player: this.state.player++ });
                        }
                     }
                  }

                  else {
                     if (oppositeLine != null && oppositeLine.className != "downPer") {
                        currentLineId = j + " " + (j + 1) + " " + k + " v";
                        oppositeLineId = j + " " + (j + 1) + " " + (k - 1) + " v";
                        botRectangleCheck = true;
                        topRectangleCheck = true;
                        while (oppositeLine != null && oppositeLine.className != "downPer" &&
                           currentLine != null && currentLine.className != "downPer" &&
                           botEndBuffer != null && botEndBuffer.className == "acrossPer") {
                           oppositeLineId = j + " " + (j + 1) + " " + (k - 1) + " v";
                           currentLineId = j + " " + (j + 1) + " " + k + " v";
                           botEndBufferId = (j + 1) + " " + (k - 1) + " " + k;
                           botEndBuffer = document.getElementById(botEndBufferId);
                           oppositeLine = document.getElementById(oppositeLineId);
                           currentLine = document.getElementById(currentLineId);
                           if (oppositeLine == null || oppositeLine.className == "downPer" || currentLine == null || currentLine.className == "downPer") {
                              botRectangleCheck = false;
                           }
                           else {
                              j++;
                           }

                        }
                        j = j1;
                        currentLineId = j + " " + (j + 1) + " " + k + " v";
                        oppositeLineId = j + " " + (j + 1) + " " + (k - 1) + " v";
                        currentLine = document.getElementById(currentLineId);
                        oppositeLine = document.getElementById(oppositeLineId);
                        while (oppositeLine != null && oppositeLine.className != "downPer" &&
                           currentLine != null && currentLine.className != "downPer" &&
                           topEndBuffer != null && topEndBuffer.className == "acrossPer") {
                           oppositeLineId = j + " " + (j + 1) + " " + (k - 1) + " v";
                           currentLineId = j + " " + (j + 1) + " " + k + " v";
                           topEndBufferId = j + " " + (k - 1) + " " + k;
                           topEndBuffer = document.getElementById(topEndBufferId);
                           oppositeLine = document.getElementById(oppositeLineId);
                           currentLine = document.getElementById(currentLineId);
                           if (oppositeLine == null || oppositeLine.className == "downPer" || currentLine == null || currentLine.className == "downPer") {
                              topRectangleCheck = false;
                           }
                           else {
                              j--;
                           }

                        }
                        if (botRectangleCheck && topRectangleCheck) {
                           var start = topEndBufferId.split(" ");
                           var i = start[0];
                           var n = start[1];
                           var m = start[2];
                           var end = botEndBufferId.split(" ");
                           var j = end[0];
                           if (this.state.player % 3 == 0) {
                              for (i; i < j; i++) {
                                 var boxId = i + " " + n;
                                 var line = i + " " + n + " " + m;
                                 document.getElementById(boxId).className = "boxPlay1";
                                 document.getElementById(line).className = "acrossPlay1";
                                 boxesMade++;
                              }
                              this.setState({ player1box: this.state.player1box + boxesMade });
                           }
                           else if (this.state.player % 3 == 1) {
                              for (i; i < j; i++) {
                                 var boxId = i + " " + n;
                                 var line = i + " " + n + " " + m;
                                 document.getElementById(boxId).className = "boxPlay2";
                                 document.getElementById(line).className = "acrossPlay2";
                                 boxesMade++;
                              }
                              this.setState({ player2box: this.state.player2box + boxesMade });
                           }
                           else {
                              for (i; i < j; i++) {
                                 var boxId = i + " " + n;
                                 var line = i + " " + n + " " + m;
                                 document.getElementById(boxId).className = "boxPlay3";
                                 document.getElementById(line).className = "acrossPlay3";
                                 boxesMade++;
                              }
                              this.setState({ player3box: this.state.player3box + boxesMade });
                           }
                           this.setState({ player: this.state.player++ });
                        }
                     }
                  }
               }
            }

            // jQuery to update grid state
            $("#selected").attr("class", "dot");
            $("#selected").attr("id", "");

            // player turn again
            if (!(leftBox || rightBox || topBox || botBox)) {
               this.setState({ player: this.state.player + 1 });
            }
            this.setState({ dotsClicked: 0 });
         }
      }
   }

   render() {
      if (this.state.generateBoard == true) {
         this.setState({ generateBoard: false });

         //first row
         for (var y = 0; y < 4; y++) {
            row0.push(<input type="button" className="dot" onClick={this.handleDotClick} x={0} y={y} />)
            var id = "0 " + y + " " + (y + 1);
            row0.push(<span className="acrossPer" id={id}></span>)
         }
         row0.pop();

         // second row
         for (var y = 0; y < 4; y++) {
            row1.push(<input type="button" className="dot" onClick={this.handleDotClick} x={1} y={y} />)
            var idV = "0 " + "1 " + y + " v";
            row1.push(<span className="downPer" id={idV}></span>)
            var idS = "0 " + y;
            row1.push(<span className="square" id={idS}></span>)
            var idH = "1 " + y + " " + (y + 1);
            row1.push(<span className="acrossPer" id={idH}></span>)
         }
         row1.pop();
         row1.pop();

         // third row
         for (var y = 0; y < 4; y++) {
            row2.push(<input type="button" className="dot" onClick={this.handleDotClick} x={2} y={y} />)
            var idV = "1 " + "2 " + y + " v";   // row2(up), row2(down), index, indicator
            row2.push(<span className="downPer" id={idV}></span>)
            var idS = "1 " + y;  // row-1, index;
            row2.push(<span className="square" id={idS}></span>)
            var idH = "2 " + y + " " + (y + 1);   // row, dot1(left), dot2(right)
            row2.push(<span className="acrossPer" id={idH}></span>)
         }
         row2.pop();
         row2.pop();

         // forth row
         for (var y = 0; y < 4; y++) {
            row3.push(<input type="button" className="dot" onClick={this.handleDotClick} x={3} y={y} />)
            var idV = "2 " + "3 " + y + " v";   // row3(up), row3(down), index, indicator
            row3.push(<span className="downPer" id={idV}></span>)
            var idS = "2 " + y;  // row-1, index;
            row3.push(<span className="square" id={idS}></span>)
            var idH = "3 " + y + " " + (y + 1);   // row, dot1(left), dot2(right)
            row3.push(<span className="acrossPer" id={idH}></span>)
         }
         row3.pop();
         row3.pop();

      }

      var gameOver = this.checkWinner();

      if (!gameOver) {
         if (this.state.player % 3 == 0) {
            status = "Player 1's turn"
         }
         else if (!gameOver) {
            if (this.state.player % 3 == 1) {
               status = "Player 2's turn"
            }
            else {
               status = "Player 3's turn"
            }
         }
      }
      else {
         if ((this.state.player1box > this.state.player3box) && (this.state.player1box > this.state.player2box)) {
            status = "Player 1 wins!"; //link to player 1 html
            //window.location.href = "./winnerPlayer1.html";
         }
         else if ((this.state.player2box > this.state.player1box) && (this.state.player2box > this.state.player3box)) {
            status = "Player 2 wins!"; //link to player 2 html
            //window.location.assign("./winnerPlayer2.html"); 
         }
         else if ((this.state.player3box > this.state.player1box) && (this.state.player3box > this.state.player2box)) {
            status = "Player 3 wins!"; //link to player 3 html 
            //window.location.href = "./winnerPlayer3.html";
         }
         else {
            status = "It's a tie!";
            //window.location.assign("./tie.html"); 
         }
      }


      var player1 = "Player 1's boxes: " + this.state.player1box;
      var player2 = "Player 2's boxes: " + this.state.player2box;
      var player3 = "Player 3's boxes: " + this.state.player3box;
      return (
         <div>
            <div className="status">{status}</div>
            <div className="board-row-top">{row0}</div>
            <div className="board-row">{row1}</div>
            <div className="board-row">{row2}</div>
            <div className="board-row-bot">{row3}</div>
            <div className="status">
               <span>{player1}</span>
               <span>{player2}</span>
               <span>{player3}</span>
            </div>
         </div>

      );
   }

   checkWinner = () => {
      var gameOver = false;
      var squares = document.getElementsByClassName("square");
      if (squares.length == 0) {
         gameOver = true;
      }
      return gameOver;
   }
}

// main render
class Game extends React.Component {
   render() {
      return (
         <div className="game">
            <div className="game-board">
               <Board />
            </div>
         </div>
      );
   }
}

ReactDOM.render(<Game />, document.getElementById('game'));
