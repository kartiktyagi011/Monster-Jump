
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwibWF4U3RhckR1cmF0aW9uIiwibWluU3RhckR1cmF0aW9uIiwiZ3JvdW5kIiwiTm9kZSIsInBsYXllciIsInNjb3JlRGlzcGxheSIsIkxhYmVsIiwic2NvcmVBdWRpbyIsIkF1ZGlvQ2xpcCIsImdhbWVPdmVyTm9kZSIsIm9uTG9hZCIsImdyb3VuZFkiLCJ5IiwiaGVpZ2h0IiwidGltZXIiLCJzdGFyRHVyYXRpb24iLCJzcGF3bk5ld1N0YXIiLCJzY29yZSIsIm5ld1N0YXIiLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFBvc2l0aW9uIiwiZ2V0TmV3U3RhclBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50IiwiZ2FtZSIsIk1hdGgiLCJyYW5kb20iLCJyYW5kWCIsInJhbmRZIiwianVtcEhlaWdodCIsIm1heFgiLCJ3aWR0aCIsInYyIiwidXBkYXRlIiwiZHQiLCJnYW1lT3ZlciIsImVuYWJsZWQiLCJnYWluU2NvcmUiLCJzdHJpbmciLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJzdG9wQWxsQWN0aW9ucyIsImFjdGl2ZSIsInJlcGxheSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFFUkMsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRCxLQUZKO0FBT1JDLElBQUFBLGVBQWUsRUFBRSxDQVBUO0FBUVJDLElBQUFBLGVBQWUsRUFBRSxFQVJUO0FBVVJDLElBQUFBLE1BQU0sRUFBRTtB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QUFLaEMsTUFBTCxDQUFZc0MsY0FBWjtBQUNBLFNBQUtqQyxZQUFMLENBQWtCa0MsTUFBbEIsR0FBMkIsSUFBM0I7QUFDSCxHQWhHSTtBQWtHTEMsRUFBQUEsTUFsR0ssb0JBa0dHO0FBQ0puRCxJQUFBQSxFQUFFLENBQUNvRCxRQUFILENBQVlDLFNBQVosQ0FBc0IsTUFBdEI7QUFDSDtBQXBHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBcclxuICAgICAgICBzdGFyUHJlZmFiOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbWF4U3RhckR1cmF0aW9uOiAwLFxyXG4gICAgICAgIG1pblN0YXJEdXJhdGlvbjogNjAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBsYXllcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBzY29yZURpc3BsYXk6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHNjb3JlQXVkaW86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnYW1lT3Zlck5vZGUgOiB7XHJcbiAgICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5ncm91bmRZID0gdGhpcy5ncm91bmQueSArIHRoaXMuZ3JvdW5kLmhlaWdodC8yO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhckR1cmF0aW9uID0gMDtcclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3Bhd25OZXdTdGFyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIHNwYXduTmV3U3RhcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIG5ld1N0YXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnN0YXJQcmVmYWIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdTdGFyKTtcclxuICAgICAgICBcclxuICAgICAgICBuZXdTdGFyLnNldFBvc2l0aW9uKHRoaXMuZ2V0TmV3U3RhclBvc2l0aW9uKCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG5ld1N0YXIuZ2V0Q29tcG9uZW50KCdTdGFyJykuZ2FtZSA9IHRoaXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdGFyRHVyYXRpb24gPSB0aGlzLm1pblN0YXJEdXJhdGlvbiArIE1hdGgucmFuZG9tKCkgKiAodGhpcy5tYXhTdGFyRHVyYXRpb24gLSB0aGlzLm1pblN0YXJEdXJhdGlvbik7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldE5ld1N0YXJQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByYW5kWCA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHJhbmRZID0gdGhpcy5ncm91bmRZICsgTWF0aC5yYW5kb20oKSAqIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJykuanVtcEhlaWdodCArIDUwO1xyXG4gICAgICAgXHJcbiAgICAgICAgdmFyIG1heFggPSB0aGlzLm5vZGUud2lkdGgvMjtcclxuICAgICAgICByYW5kWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIgKiBtYXhYO1xyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKHJhbmRYLCByYW5kWSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gdGhpcy5zdGFyRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTsgICBcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbWVyICs9IGR0O1xyXG4gICAgfSxcclxuXHJcbiAgICBnYWluU2NvcmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNjb3JlICs9IDE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkuc3RyaW5nID0gJ1Njb3JlOiAnICsgdGhpcy5zY29yZTtcclxuICAgICAgXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNjb3JlQXVkaW8sIGZhbHNlKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2FtZU92ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBsYXllci5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlcGxheSgpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVcIik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59KTtcclxuXHJcbiJdfQ==