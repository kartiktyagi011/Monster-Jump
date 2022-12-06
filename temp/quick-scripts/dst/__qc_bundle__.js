
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/Game');
require('./assets/Scripts/Player');
require('./assets/Scripts/Star');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8c33d2SxNIDL76oSXNexPW', 'Star');
// Scripts/Star.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    pickRadius: 0
  },
  getPlayerDistance: function getPlayerDistance() {
    var playerPos = this.game.player.getPosition();
    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  },
  onPicked: function onPicked() {
    this.game.spawnNewStar();
    this.game.gainScore();
    this.node.destroy();
  },
  update: function update(dt) {
    if (this.getPlayerDistance() < this.pickRadius) {
      this.onPicked();
      return;
    }

    var opacityRatio = 1 - this.game.timer / this.game.starDuration;
    var minOpacity = 50;
    this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3Rhci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBpY2tSYWRpdXMiLCJnZXRQbGF5ZXJEaXN0YW5jZSIsInBsYXllclBvcyIsImdhbWUiLCJwbGF5ZXIiLCJnZXRQb3NpdGlvbiIsImRpc3QiLCJub2RlIiwicG9zaXRpb24iLCJzdWIiLCJtYWciLCJvblBpY2tlZCIsInNwYXduTmV3U3RhciIsImdhaW5TY29yZSIsImRlc3Ryb3kiLCJ1cGRhdGUiLCJkdCIsIm9wYWNpdHlSYXRpbyIsInRpbWVyIiwic3RhckR1cmF0aW9uIiwibWluT3BhY2l0eSIsIm9wYWNpdHkiLCJNYXRoIiwiZmxvb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUVSQyxJQUFBQSxVQUFVLEVBQUU7QUFGSixHQUhQO0FBUUxDLEVBQUFBLGlCQUFpQixFQUFFLDZCQUFZO0FBRTNCLFFBQUlDLFNBQVMsR0FBRyxLQUFLQyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLFdBQWpCLEVBQWhCO0FBRUEsUUFBSUMsSUFBSSxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQkMsR0FBbkIsQ0FBdUJQLFNBQXZCLEVBQWtDUSxHQUFsQyxFQUFYO0FBQ0EsV0FBT0osSUFBUDtBQUNILEdBZEk7QUFnQkxLLEVBQUFBLFFBQVEsRUFBRSxvQkFBVztBQUVqQixTQUFLUixJQUFMLENBQVVTLFlBQVY7QUFFQSxTQUFLVCxJQUFMLENBQVVVLFNBQVY7QUFFQSxTQUFLTixJQUFMLENBQVVPLE9BQVY7QUFDSCxHQXZCSTtBQXlCTEMsRUFBQUEsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7QUFFbEIsUUFBSSxLQUFLZixpQkFBTCxLQUEyQixLQUFLRCxVQUFwQyxFQUFnRDtBQUU1QyxXQUFLVyxRQUFMO0FBQ0E7QUFDSDs7QUFHRCxRQUFJTSxZQUFZLEdBQUcsSUFBSSxLQUFLZCxJQUFMLENBQVVlLEtBQVYsR0FBZ0IsS0FBS2YsSUFBTCxDQUFVZ0IsWUFBakQ7QUFDQSxRQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFDQSxTQUFLYixJQUFMLENBQVVjLE9BQVYsR0FBb0JELFVBQVUsR0FBR0UsSUFBSSxDQUFDQyxLQUFMLENBQVdOLFlBQVksSUFBSSxNQUFNRyxVQUFWLENBQXZCLENBQWpDO0FBQ0g7QUFyQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBcclxuICAgICAgICBwaWNrUmFkaXVzOiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRQbGF5ZXJEaXN0YW5jZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgXHJcbiAgICAgICAgdmFyIHBsYXllclBvcyA9IHRoaXMuZ2FtZS5wbGF5ZXIuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgIFxyXG4gICAgICAgIHZhciBkaXN0ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1YihwbGF5ZXJQb3MpLm1hZygpO1xyXG4gICAgICAgIHJldHVybiBkaXN0O1xyXG4gICAgfSxcclxuXHJcbiAgICBvblBpY2tlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nYW1lLnNwYXduTmV3U3RhcigpO1xyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5nYW1lLmdhaW5TY29yZSgpO1xyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5nZXRQbGF5ZXJEaXN0YW5jZSgpIDwgdGhpcy5waWNrUmFkaXVzKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLm9uUGlja2VkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIG9wYWNpdHlSYXRpbyA9IDEgLSB0aGlzLmdhbWUudGltZXIvdGhpcy5nYW1lLnN0YXJEdXJhdGlvbjtcclxuICAgICAgICB2YXIgbWluT3BhY2l0eSA9IDUwO1xyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gbWluT3BhY2l0eSArIE1hdGguZmxvb3Iob3BhY2l0eVJhdGlvICogKDI1NSAtIG1pbk9wYWNpdHkpKTtcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuICAgIFxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b7a97AAovBLMKryTNio/6Ex', 'Player');
// Scripts/Player.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    jumpHeight: 0,
    jumpDuration: 0,
    maxMoveSpeed: 0,
    accel: 0,
    jumpAudio: {
      "default": null,
      type: cc.AudioClip
    },
    minX: -480,
    maxX: 480
  },
  runJumpAction: function runJumpAction() {
    var jumpUp = cc.tween().by(this.jumpDuration, {
      y: this.jumpHeight
    }, {
      easing: 'sineOut'
    });
    var jumpDown = cc.tween().by(this.jumpDuration, {
      y: -this.jumpHeight
    }, {
      easing: 'sineIn'
    });
    var tween = cc.tween().sequence(jumpUp, jumpDown).call(this.playJumpSound, this);
    return cc.tween().repeatForever(tween);
  },
  playJumpSound: function playJumpSound() {
    cc.audioEngine.playEffect(this.jumpAudio, false);
  },
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  },
  onLoad: function onLoad() {
    var jumpAction = this.runJumpAction();
    cc.tween(this.node).then(jumpAction).start();
    this.accLeft = false;
    this.accRight = false;
    this.xSpeed = 0;
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  update: function update(dt) {
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    }

    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    }

    this.node.x += this.xSpeed * dt;

    if (this.node.x > this.maxX) {
      this.node.x = this.maxX;
    }

    if (this.node.x < this.minX) {
      this.node.x = this.minX;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwianVtcEF1ZGlvIiwidHlwZSIsIkF1ZGlvQ2xpcCIsIm1pblgiLCJtYXhYIiwicnVuSnVtcEFjdGlvbiIsImp1bXBVcCIsInR3ZWVuIiwiYnkiLCJ5IiwiZWFzaW5nIiwianVtcERvd24iLCJzZXF1ZW5jZSIsImNhbGwiLCJwbGF5SnVtcFNvdW5kIiwicmVwZWF0Rm9yZXZlciIsImF1ZGlvRW5naW5lIiwicGxheUVmZmVjdCIsIm9uS2V5RG93biIsImV2ZW50Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwiYSIsImFjY0xlZnQiLCJkIiwiYWNjUmlnaHQiLCJvbktleVVwIiwib25Mb2FkIiwianVtcEFjdGlvbiIsIm5vZGUiLCJ0aGVuIiwic3RhcnQiLCJ4U3BlZWQiLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIktFWV9VUCIsIm9uRGVzdHJveSIsIm9mZiIsInVwZGF0ZSIsImR0IiwiTWF0aCIsImFicyIsIngiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUVSQyxJQUFBQSxVQUFVLEVBQUUsQ0FGSjtBQUlSQyxJQUFBQSxZQUFZLEVBQUUsQ0FKTjtBQU1SQyxJQUFBQSxZQUFZLEVBQUUsQ0FOTjtBQVFSQyxJQUFBQSxLQUFLLEVBQUUsQ0FSQztBQVVSQyxJQUFBQSxTQUFTLEVBQUU7QUFDUCxpQkFBUyxJQURGO0FBRVBDLE1BQUFBLElBQUksRUFBRVQsRUFBRSxDQUFDVTtBQUZGLEtBVkg7QUFjTkMsSUFBQUEsSUFBSSxF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Q29tcG9uZW50LFxyXG4gICAgXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICBcclxuICAgICAgICBqdW1wSGVpZ2h0OiAwLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGp1bXBEdXJhdGlvbjogMCxcclxuICAgICAgIFxyXG4gICAgICAgIG1heE1vdmVTcGVlZDogMCxcclxuICAgICAgICBcclxuICAgICAgICBhY2NlbDogMCxcclxuICAgICAgIFxyXG4gICAgICAgIGp1bXBBdWRpbzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuICAgICAgICB9LFxyXG4gICAgICAgICAgbWluWCA6IC00ODAsXHJcbiAgICAgICAgICBtYXhYIDogIDQ4MCxcclxuICAgIH0sXHJcblxyXG4gICAgcnVuSnVtcEFjdGlvbjogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIganVtcFVwID0gY2MudHdlZW4oKS5ieSh0aGlzLmp1bXBEdXJhdGlvbiwgeyB5OiB0aGlzLmp1bXBIZWlnaHQgfSwgeyBlYXNpbmc6ICdzaW5lT3V0JyB9KTtcclxuICAgICAgICB2YXIganVtcERvd24gPSBjYy50d2VlbigpLmJ5KHRoaXMuanVtcER1cmF0aW9uLCB7IHk6IC10aGlzLmp1bXBIZWlnaHQgfSwgeyBlYXNpbmc6ICdzaW5lSW4nIH0pO1xyXG4gICAgICAgIHZhciB0d2VlbiA9IGNjLnR3ZWVuKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlcXVlbmNlKGp1bXBVcCwganVtcERvd24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKHRoaXMucGxheUp1bXBTb3VuZCwgdGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIGNjLnR3ZWVuKCkucmVwZWF0Rm9yZXZlcih0d2Vlbik7XHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXlKdW1wU291bmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuanVtcEF1ZGlvLCBmYWxzZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uS2V5RG93biAoZXZlbnQpIHtcclxuICAgICAgICBcclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uS2V5VXAgKGV2ZW50KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIFxyXG4gICAgICAgIHZhciBqdW1wQWN0aW9uID0gdGhpcy5ydW5KdW1wQWN0aW9uKCk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50aGVuKGp1bXBBY3Rpb24pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMueFNwZWVkID0gMDtcclxuXHJcbiAgICAgICBcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpOyAgICBcclxuICAgIH0sXHJcblxyXG4gICAgb25EZXN0cm95ICgpIHtcclxuICAgICAgICBcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9LCAgICBcclxuXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmFjY0xlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgLT0gdGhpcy5hY2NlbCAqIGR0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY2NSaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCArPSB0aGlzLmFjY2VsICogZHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICggTWF0aC5hYnModGhpcy54U3BlZWQpID4gdGhpcy5tYXhNb3ZlU3BlZWQgKSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkID0gdGhpcy5tYXhNb3ZlU3BlZWQgKiB0aGlzLnhTcGVlZCAvIE1hdGguYWJzKHRoaXMueFNwZWVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMueFNwZWVkICogZHQ7XHJcblxyXG4gICAgICAgIGlmKHRoaXMubm9kZS54PnRoaXMubWF4WCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0gdGhpcy5tYXhYO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLm5vZGUueDx0aGlzLm1pblgpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IHRoaXMubWluWDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42e1dZjTrBCeb3agsB4T3el', 'Game');
// Scripts/Game.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    maxStarDuration: 0,
    minStarDuration: 60,
    ground: {
      "default": null,
      type: cc.Node
    },
    player: {
      "default": null,
      type: cc.Node
    },
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    },
    gameOverNode: {
      "default": null,
      type: cc.Node
    }
  },
  onLoad: function onLoad() {
    this.groundY = this.ground.y + this.ground.height / 2;
    this.timer = 0;
    this.starDuration = 0;
    this.spawnNewStar();
    this.score = 0;
  },
  spawnNewStar: function spawnNewStar() {
    var newStar = cc.instantiate(this.starPrefab);
    this.node.addChild(newStar);
    newStar.setPosition(this.getNewStarPosition());
    newStar.getComponent('Star').game = this;
    this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0;
    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50;
    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX;
    return cc.v2(randX, randY);
  },
  update: function update(dt) {
    if (this.timer > this.starDuration) {
      this.gameOver();
      this.enabled = false;
      return;
    }

    this.timer += dt;
  },
  gainScore: function gainScore() {
    this.score += 1;
    this.scoreDisplay.string = 'Score: ' + this.score;
    cc.audioEngine.playEffect(this.scoreAudio, false);
  },
  gameOver: function gameOver() {
    this.player.stopAllActions();
    this.gameOverNode.active = true;
  },
  replay: function replay() {
    cc.director.loadScene("Game");
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwibWF4U3RhckR1cmF0aW9uIiwibWluU3RhckR1cmF0aW9uIiwiZ3JvdW5kIiwiTm9kZSIsInBsYXllciIsInNjb3JlRGlzcGxheSIsIkxhYmVsIiwic2NvcmVBdWRpbyIsIkF1ZGlvQ2xpcCIsImdhbWVPdmVyTm9kZSIsIm9uTG9hZCIsImdyb3VuZFkiLCJ5IiwiaGVpZ2h0IiwidGltZXIiLCJzdGFyRHVyYXRpb24iLCJzcGF3bk5ld1N0YXIiLCJzY29yZSIsIm5ld1N0YXIiLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFBvc2l0aW9uIiwiZ2V0TmV3U3RhclBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50IiwiZ2FtZSIsIk1hdGgiLCJyYW5kb20iLCJyYW5kWCIsInJhbmRZIiwianVtcEhlaWdodCIsIm1heFgiLCJ3aWR0aCIsInYyIiwidXBkYXRlIiwiZHQiLCJnYW1lT3ZlciIsImVuYWJsZWQiLCJnYWluU2NvcmUiLCJzdHJpbmciLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJzdG9wQWxsQWN0aW9ucyIsImFjdGl2ZSIsInJlcGxheSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFFUkMsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRCxLQUZKO0FBT1JDLElBQUFBLGVBQWUsRUFBRSxDQVBUO0FBUVJDLElBQUFBLGVBQWUsRUFBRSxFQVJUO0FBVVJDLElBQUFBLE1BQU0sRUFBRTtBQUNKLGlCQUFTLElBREw7QUFFSkosTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNVO0FBRkwsS0FWQTtBQWVSQyxJQUFBQSxNQUFNLEVBQUU7QUFDSixpQkFBUyxJQURMO0FBRUpOLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDVTtBQUZMLEtBZkE7QUFvQlJFLElBQUFBLFlBQVksRUFBRTtBQUNWLGlCQUFTLElBREM7QUFFVlAsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNhO0FBRkMsS0FwQk47QUF5QlJDLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTLElBREQ7QUFFUlQsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNlO0FBRkQsS0F6Qko7QUE2QlJDLElBQUFBLFlBQVksRUFBRztBQUNWLGlCQUFTLElBREM7QUFFVlgsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNVO0FBRkM7QUE3QlAsR0FIUDtBQXNDTE8sRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBRWhCLFNBQUtDLE9BQUwsR0FBZSxLQUFLVCxNQUFMLENBQVlVLENBQVosR0FBZ0IsS0FBS1YsTUFBTCxDQUFZVyxNQUFaLEdBQW1CLENBQWxEO0FBRUEsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLENBQXBCO0FBRUEsU0FBS0MsWUFBTDtBQUVBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0gsR0FoREk7QUFrRExELEVBQUFBLFlBQVksRUFBRSx3QkFBVztBQUVyQixRQUFJRSxPQUFPLEdBQUd6QixFQUFFLENBQUMwQixXQUFILENBQWUsS0FBS3RCLFVBQXBCLENBQWQ7QUFFQSxTQUFLdUIsSUFBTCxDQUFVQyxRQUFWLENBQW1CSCxPQUFuQjtBQUVBQSxJQUFBQSxPQUFPLENBQUNJLFdBQVIsQ0FBb0IsS0FBS0Msa0JBQUwsRUFBcEI7QUFFQUwsSUFBQUEsT0FBTyxDQUFDTSxZQUFSLENBQXFCLE1BQXJCLEVBQTZCQyxJQUE3QixHQUFvQyxJQUFwQztBQUVBLFNBQUtWLFlBQUwsR0FBb0IsS0FBS2QsZUFBTCxHQUF1QnlCLElBQUksQ0FBQ0MsTUFBTCxNQUFpQixLQUFLM0IsZUFBTCxHQUF1QixLQUFLQyxlQUE3QyxDQUEzQztBQUNBLFNBQUthLEtBQUwsR0FBYSxDQUFiO0FBQ0gsR0E5REk7QUFnRUxTLEVBQUFBLGtCQUFrQixFQUFFLDhCQUFZO0FBQzVCLFFBQUlLLEtBQUssR0FBRyxDQUFaO0FBRUEsUUFBSUMsS0FBSyxHQUFHLEtBQUtsQixPQUFMLEdBQWVlLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixLQUFLdkIsTUFBTCxDQUFZb0IsWUFBWixDQUF5QixRQUF6QixFQUFtQ00sVUFBbEUsR0FBK0UsRUFBM0Y7QUFFQSxRQUFJQyxJQUFJLEdBQUcsS0FBS1gsSUFBTCxDQUFVWSxLQUFWLEdBQWdCLENBQTNCO0FBQ0FKLElBQUFBLEtBQUssR0FBRyxDQUFDRixJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBakIsSUFBd0IsQ0FBeEIsR0FBNEJJLElBQXBDO0FBRUEsV0FBT3RDLEVBQUUsQ0FBQ3dDLEVBQUgsQ0FBTUwsS0FBTixFQUFhQyxLQUFiLENBQVA7QUFDSCxHQXpFSTtBQTJFTEssRUFBQUEsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7QUFFbEIsUUFBSSxLQUFLckIsS0FBTCxHQUFhLEtBQUtDLFlBQXRCLEVBQW9DO0FBQ2hDLFdBQUtxQixRQUFMO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLEtBQWY7QUFDQTtBQUNIOztBQUNELFNBQUt2QixLQUFMLElBQWNxQixFQUFkO0FBQ0gsR0FuRkk7QUFxRkxHLEVBQUFBLFNBQVMsRUFBRSxxQkFBWTtBQUNuQixTQUFLckIsS0FBTCxJQUFjLENBQWQ7QUFFQSxTQUFLWixZQUFMLENBQWtCa0MsTUFBbEIsR0FBMkIsWUFBWSxLQUFLdEIsS0FBNUM7QUFFQXhCLElBQUFBLEVBQUUsQ0FBQytDLFdBQUgsQ0FBZUMsVUFBZixDQUEwQixLQUFLbEMsVUFBL0IsRUFBMkMsS0FBM0M7QUFDSCxHQTNGSTtBQTZGTDZCLEVBQUFBLFFBQVEsRUFBRSxvQkFBWTtBQUNsQixTQUFLaEMsTUFBTCxDQUFZc0MsY0FBWjtBQUNBLFNBQUtqQyxZQUFMLENBQWtCa0MsTUFBbEIsR0FBMkIsSUFBM0I7QUFDSCxHQWhHSTtBQWtHTEMsRUFBQUEsTUFsR0ssb0JBa0dHO0FBQ0puRCxJQUFBQSxFQUFFLENBQUNvRCxRQUFILENBQVlDLFNBQVosQ0FBc0IsTUFBdEI7QUFDSDtBQXBHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBcclxuICAgICAgICBzdGFyUHJlZmFiOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbWF4U3RhckR1cmF0aW9uOiAwLFxyXG4gICAgICAgIG1pblN0YXJEdXJhdGlvbjogNjAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBsYXllcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBzY29yZURpc3BsYXk6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHNjb3JlQXVkaW86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnYW1lT3Zlck5vZGUgOiB7XHJcbiAgICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5ncm91bmRZID0gdGhpcy5ncm91bmQueSArIHRoaXMuZ3JvdW5kLmhlaWdodC8yO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhckR1cmF0aW9uID0gMDtcclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3Bhd25OZXdTdGFyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIHNwYXduTmV3U3RhcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIG5ld1N0YXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnN0YXJQcmVmYWIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdTdGFyKTtcclxuICAgICAgICBcclxuICAgICAgICBuZXdTdGFyLnNldFBvc2l0aW9uKHRoaXMuZ2V0TmV3U3RhclBvc2l0aW9uKCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG5ld1N0YXIuZ2V0Q29tcG9uZW50KCdTdGFyJykuZ2FtZSA9IHRoaXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdGFyRHVyYXRpb24gPSB0aGlzLm1pblN0YXJEdXJhdGlvbiArIE1hdGgucmFuZG9tKCkgKiAodGhpcy5tYXhTdGFyRHVyYXRpb24gLSB0aGlzLm1pblN0YXJEdXJhdGlvbik7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldE5ld1N0YXJQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByYW5kWCA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHJhbmRZID0gdGhpcy5ncm91bmRZICsgTWF0aC5yYW5kb20oKSAqIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJykuanVtcEhlaWdodCArIDUwO1xyXG4gICAgICAgXHJcbiAgICAgICAgdmFyIG1heFggPSB0aGlzLm5vZGUud2lkdGgvMjtcclxuICAgICAgICByYW5kWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIgKiBtYXhYO1xyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKHJhbmRYLCByYW5kWSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gdGhpcy5zdGFyRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTsgICBcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbWVyICs9IGR0O1xyXG4gICAgfSxcclxuXHJcbiAgICBnYWluU2NvcmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNjb3JlICs9IDE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkuc3RyaW5nID0gJ1Njb3JlOiAnICsgdGhpcy5zY29yZTtcclxuICAgICAgXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNjb3JlQXVkaW8sIGZhbHNlKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2FtZU92ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBsYXllci5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlcGxheSgpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVcIik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59KTtcclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
